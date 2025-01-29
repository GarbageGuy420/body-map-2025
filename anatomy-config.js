var basic_config = {
    "basic_1": { //head
        "hover": "HEAD",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "_self",
        "active": true
    },
    "basic_2": { //neck
        "hover": "NECK",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "_self",
        "active": true
    },
    "basic_3": { //chest
        "hover": "CHEST",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "_self",
        "active": true
    },
    "basic_4": { //abdomen
        "hover": "ABDOMEN",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "_self",
        "active": true
    },
    "basic_5": { //pelvis
        "hover": "PELVIS",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "_self",
        "active": true
    },
    "basic_6": { //arm-rt
        "hover": "ARM [RT]",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "_self",
        "active": true
    },
    "basic_7": { //arm-lt
        "hover": "ARM [LT]",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "_self",
        "active": true
    },
    "basic_8": { //leg-rt
        "hover": "LEG [RT]",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "_self",
        "active": true
    },
    "basic_9": { //leg-lt
        "hover": "LEG [LT]",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "_self",
        "active": true
    }
};

// Function to update selected body part display
function updateSelectedPart(partName) {
    document.getElementById("selected-part-display").innerText = "Selected: " + partName;
}
