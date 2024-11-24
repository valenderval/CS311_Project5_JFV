
function submit() {
    
    const adjective = document.getElementById('adjective').value;
    const name = document.getElementById('name').value;
    const adverb = document.getElementById('adverb').value;
    const noun = document.getElementById('noun').value;
    const noun2 = document.getElementById('noun2').value;
    const adjective2 = document.getElementById('adjective2').value;
    const sillyJob = document.getElementById('sillyJob').value;
    const sillyPlace = document.getElementById('sillyPlace').value;
    const emotion = document.getElementById('emotion').value;
    const location = document.getElementById('location').value;



    const story = `Once upon a time, there was a ${adjective} cat named ${name}. 
    She would often ${adverb} dart from room to room, Knocking over the ${noun} and the ${noun2} in the process. 
    Her ${adjective2} brother and sister, cats named ${sillyJob} and ${sillyPlace}, taught her to do that. 
    They are so ${emotion} that she lives in her ${location}.`;
    document.getElementById('story').innerText = story;

    document.getElementById('container').style.display = 'none';
    document.getElementById('madlib-complete').style.display = 'flex';
    document.getElementById('photo1').style.display = "none"
    document.getElementById('photo2').style.display = "flex"

} /*end submit*/

function reset() {
    document.getElementById('container').style.display = 'flex';
    document.getElementById('madlib-complete').style.display = 'none';

    document.getElementById('adjective').value = '';
    document.getElementById('name').value = '';
    document.getElementById('adverb').value = '';
    document.getElementById('noun').value = '';
    document.getElementById('noun2').value = '';
    document.getElementById('adjective2').value = '';
    document.getElementById('sillyJob').value = '';
    document.getElementById('sillyPlace').value = '';
    document.getElementById('emotion').value = '';
    document.getElementById('location').value = '';

    document.getElementById('photo1').style.display = "flex"
    document.getElementById('photo2').style.display = "none"
    
}/*end reset*/