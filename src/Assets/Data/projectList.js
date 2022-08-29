
// To have projects added as cards to the project page, add projects to the list here.
//  1. Set your title, description, and link (unfortunately mandatory for now)
//  2. imgPath must point to an image in src/Assets/images/projects/

const projectList = { "projects" : [
    {
        "title": "Digital Pathology",
        "imgPath": "digital-pathology.png",
        "description": "Digital Pathology is a billion dollar industry where machine learning is used to diagnose diseases with digitized tissue slides as an input. This project is a proof of concept for a machine learning model deployed on AWS that can classify tissue slides into 3 categories: mild, moderate, and severe chronic sinusitis.",
        "link": "https://github.com/Digital-Pathology"
    },
    {
        "title": "Biology Guided Neural Networks (BGNN)",
        "imgPath": "detectron.png",
        "description": "Metadata is key to applying machine learning to the vast collections of digitized biological specimens, but is often erroneous. We developed a system to automatically extract metadata from images of biological specimens.",
        "link": "https://github.com/hdr-bgnn/drexel_metadata"
    },
    {
        "title": "CIFAR-10 Classification",
        "imgPath": "CS-615.png",
        "description": "Train and compare performance of ANN, MLP, CNN, and GAN neural networks for supervised classification on the CIFAR-10 dataset.",
        "link": "https://github.com/kevinkarnani/CIFAR-10-Classifier"
    },
    {
        "title": "Vaporwave Graphics",
        "imgPath": "vaporwave.jpeg",
        "description": "Vaporwave was a genre of music and art style that became popular in the early 2010s on the internet, but is now considered a dead genre. We wanted to create an interactive 3D world that took inspiration from the vaporwave art.",
        "link": "https://github.com/kevinkarnani/WebGL-VaporWave-Playground"
    },
    {
        "title": "Document Scanner",
        "imgPath": "documentscanner.jpeg",
        "description": "This is a document scanner that uses an edged image, computes its Hough Transform, finds the best 4 lines, computes the corners, and rectifies the image by applying a Homography Transformation.",
        "link": "https://github.com/kevinkarnani/DocumentScanner"
    },
    {
        "title": "Stroke-EDA-Predictor",
        "imgPath": "stroke.png",
        "description": "We were curious to see the effect that certain features had in the possibility of a person having a stroke and how well machine learning models predicted stroke. We found that for many cases, Age contributed the most to strokes, followed by BMI and Smoking.",
        "link": "https://github.com/kevinkarnani/Stroke-EDA-Predictor"
    },
    {
        "title": "Banking System",
        "imgPath": "software-pipeline.png",
        "description": "A Banking system written in Java featuring best industry practices like testing and build pipelines, 100% testing coverage, and Object Oriented Programming.",
        "link": "https://github.com/kevinkarnani/Banking-System"
    },
    {
        "title": "Survey and Test Generator",
        "imgPath": "software-patterns.png",
        "description": "A Survey and Test Generator written in Java featuring best design patterns like the Strategy, Bridge, Command, and others.",
        "link": "https://github.com/kevinkarnani/SurveyTestGenerator"
    },
    {
        "title": "Decisions Of The Damned",
        "imgPath": "DoTD.png",
        "description": "Decisions of The Damned is a Text-Based Adventure Game that includes a branching narrative, a combat system, a morality system, and an inventory system.",
        "link": "https://github.com/kevinkarnani/Decisions-Of-The-Damned"
    }
]}

export default projectList;