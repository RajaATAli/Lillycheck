const loadScript = (src, id) => {
  if (document.getElementById(id)) {
    return; // If the script is already loaded, don't load it again
  }

  const script = document.createElement('script');
  script.src = src;
  script.id = id;
  script.async = true;
  document.body.appendChild(script);
};

export default loadScript;
