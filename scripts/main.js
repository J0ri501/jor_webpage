document.addEventListener("DOMContentLoaded", function() {
    typeWriter("about-me-content", "Hello, I'm Jorge, a mechatronics engineer with a passion for programming and robotics. I have experience in Python, C++, and Java, and I love working on innovative projects that combine my skills in mechanics, electronics, and software development.");

    const skills = ["Python", "C++", "Java", "Robotics", "Automation"];
    displaySkills("skills-tools-content", skills);
});

function typeWriter(elementId, text, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    (function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    })();
}

function displaySkills(elementId, skills) {
    const element = document.getElementById(elementId);
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        element.appendChild(li);
    });
}


