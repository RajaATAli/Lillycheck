from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from dotenv import dotenv_values
import openai
from dotenv import load_dotenv
import os
import json
from json import JSONDecoder
from . import models
import re
import time

CONFIG = dotenv_values(".env")


# Now 'data' contains the contents of the JSON file as a dictionary

def create_system(tech_info):
    with open('.prompt_config.json', 'r') as file:
        PROMPT_CONFIG = json.load(file)
    available_tech = "\nThe following are the available technologies:\n"
    for tech in tech_info:
        available_tech += f"Name: {tech['name']}\nDescription:{tech['description']}\n"
    return PROMPT_CONFIG['system'] + available_tech

def get_tech_info(role):
    """
        returns a Query Set of names and description given a role
    """
    role = models.Role.objects.get(name=role)
    techs_for_role = role.technologies.all()
    return techs_for_role.values('name', 'description')


def model_call(role, project):
    # Retrive Data from Database
    tech_info = get_tech_info(role)
    system_message = create_system(tech_info)
    usr_message = project 

    client = openai.OpenAI(api_key=CONFIG["OPENAI_API_KEY"])
    response = client.chat.completions.create(
        model = "gpt-4o",
        messages=[
            {"role": "system", "content": system_message},
            {"role": "user", "content": usr_message},
        ]
    )
    assistant_response = response.choices[0].message.content.strip()
    # assistant_response = "{\"asdf\": \"adsfasdf\"}"
    # print(assistant_response)
    try:
        json_response = json.loads(assistant_response)
    except ValueError as e:
        return {"error": f"File not in JSON format:\n {assistant_response}"}
    return assistant_response


def index(request):
    if request.method == 'POST':
        # Retrieve data from the front end
        search_role = request.POST.get('search_role').strip()
        project = request.POST.get('search_project').strip()
        # Generate a response
        response = model_call(search_role, project)
        # response = {"AWS-CADs": ["AWS-CADs, a suite of AWS services for CAD workflows.", "AWS-CADs can be used to design and simulate the production process workflows involved in manufacturing syringes. This can help in visualizing and optimizing the production environment, which is crucial for integrating and deploying deep learning models effectively for real-time defect detection." ]}
        # time.sleep(5)
        response = json.loads(re.sub('\n', '', response))
        # Return the response
        return JsonResponse({"response":response})
    
    return render(request, 'index.html')