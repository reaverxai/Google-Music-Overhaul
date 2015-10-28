// SAMPLE
this.manifest = {
    "name": "My Extension",
    "icon": "icon.png",
    "settings": [
        {
            "tab": "Customize",
            "group": "Color",
            "name": "colorButton",
            "type": "popupButton",
            "id": "colorButton",
            "label": "Main Navigation:",
            "options": {
                "values": [
                    ["Black"],
                    ["Blue"],
                    ["Orange"]
                ]
            }
        }
    ]
};

function save_options() {
  var color = document.getElementById('colorButton').value;
  chrome.storage.sync.set({
    favoriteColor: color,
    nextColor: color
  });
}

console.log(color)