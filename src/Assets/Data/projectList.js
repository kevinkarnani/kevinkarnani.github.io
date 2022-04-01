
// To have projects added as cards to the project page, add projects to the list here.
//  1. Set your title, description, and link (unfortunately mandatory for now)
//  2. imgPath must point to an image in src/Assets/images/projects/

const projectList = { "projects" : [
    {
        "title": "Digital Pathology",
        "imgPath": "digital-pathology.png",
        "description": "Machine Learning Lead Researcher for 7-person Senior Project implementing supervised deep learning infrastructure for medical diagnoses with PyTorch using a Docker pipeline deployed on AWS.",
        "link": "https://github.com/Digital-Pathology"
    },
    {
        "title": "Deep Learning (CS 615)",
        "imgPath": "CS-615.png",
        "description": "Train and compare performance of ANN, MLP, CNN, and GAN neural networks for supervised classification on the CIFAR-10 dataset.",
        "link": "https://github.com/kevinkarnani/CIFAR-10-Classifier"
    },
    {
        "title": "Test Driven Development (SE 181)",
        "imgPath": "software-patterns.png",
        "description": "A Banking system written in Java for Introduction to Software Engineering and Development featuring best practices like testing and build pipelines, 100% testing coverage, and Object Oriented Programming.",
        "link": "https://github.com/kevinkarnani/Banking-System"
    },
    {
        "title": "Rubiks Cube Solver (CS 380)",
        "imgPath": "rubik.png",
        "description": "An optimized 2x2x2 Rubik's cube solving program that uses variations of BFS, DFS and AStar algorithms to provide a solution in under 0.01 seconds.",
        "link": "https://github.com/ritik-ghanshani/rubiks-cube-solver"
    },
    {
        "title": "Grocery List Referencer (CS 375)",
        "imgPath": "glr.png",
        "description": "A CRUD application that lets the user create Grocery shopping lists and get updates on in store availability of items featuring a React.js front-end and Google Firebase backend.",
        "link": "https://github.com/kevinkarnani/GroceryListReferencer"
    },
    {
        "title": "Decisions Of The Damned",
        "imgPath": "pawnet.png",
        "description": "Decisions of The Damned is a Text-Based Adventure Game that includes a branching narrative, a combat system, a morality system, and an inventory system.",
        "link": "https://github.com/kevinkarnani/Decisions-Of-The-Damned"
    }
]}

export default projectList;