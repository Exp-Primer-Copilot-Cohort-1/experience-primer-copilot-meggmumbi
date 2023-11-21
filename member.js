function skillsMember(){
    var skills = {
        name: 'Diana',
        age: 18,
        skills: ['JS', 'React', 'HTML', 'CSS']
    };

    var skillsJSON = JSON.stringify(skills);

    document.write(skillsJSON);
    console.log(skillsJSON);
 
}