import csv
from django.core.management.base import BaseCommand
from recommender.models import Role, Technology

class Command(BaseCommand):
    help = 'Load data from CSV file into Role and Technology models'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str)

    def handle(self, *args, **options):
        with open(options['csv_file'], 'r') as f:
            reader = csv.reader(f)
            next(reader)  # Skip the header row
            for row in reader:
                role, created = Role.objects.get_or_create(name=row[1])
                tech, created = Technology.objects.get_or_create(name=row[2], description=row[3])
                role.technologies.add(tech)