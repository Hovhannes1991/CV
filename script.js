const full_name = document.getElementById('full_name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const address = document.getElementById('address');

const skills_columns = document.getElementsByClassName('skills_column');

//about

full_name.innerText = `${author.first_name} ${author.last_name}`;

email.innerText = author.email;
email.setAttribute('href', `mailto:${author.email}`);

tel.innerText = author.tel;
let international_tel = author.tel.slice(1).split('-').join(''); //cut 0 then remove '-' then join to string
tel.setAttribute('href', `tel:+${author.country_code}${international_tel}`);

address.getElementsByTagName('span')[0].innerText = `մարզ ${author.address.region}, ք․ ${author.address.city},`;  //maked 2 spans for wrap line
address.getElementsByTagName('span')[1].innerText = `${author.address.street}, բն․ ${author.address.apt}`;


//education

for(let x = 0; x < author.education.length; x++){
	let div  = document.createElement('div');
	div.classList.add('education');

	let prof = document.createElement('p');
	prof.classList.add('proffesion');
	prof.innerText = author.education[x].proffesion;

	let univer = document.createElement('p');
	univer.classList.add('university');
	univer.innerText = author.education[x].university;

	let grd_year = document.createElement('p');
	grd_year.classList.add('graduate_year');
	grd_year.innerText = author.education[x].graduate_year;

	div.appendChild(prof);
	div.appendChild(univer);
	div.appendChild(grd_year);

	document.getElementsByClassName('education_container')[0].appendChild(div);
}


//work experience

for(let x = 0; x < author.work_experience.length; x++){
	let div  = document.createElement('div');
	div.classList.add('work');

	let poss = document.createElement('p');
	poss.classList.add('work_possition');
	poss.innerText = author.work_experience[x].work_position;

	let company = document.createElement('p');
	company.classList.add('work_company');
	company.innerText = author.work_experience[x].work_company;

	let work_years = document.createElement('p');
	work_years.classList.add('work_years');
	work_years.innerText = author.work_experience[x].work_years;

	div.appendChild(poss);
	div.appendChild(company);
	div.appendChild(work_years);

	document.getElementsByClassName('work_experience')[0].appendChild(div);
}

//languages

for(let x = 0; x < author.languages.length; x++){
	let div  = document.createElement('div');
	div.classList.add('language');

	let language_name = document.createElement('p');
	language_name.classList.add('language_name');
	language_name.innerText = author.languages[x].language_name;

	let language_level = document.createElement('p');
	language_level.classList.add('language_level');
	language_level.innerText = author.languages[x].language_level;	

	div.appendChild(language_name);
	div.appendChild(language_level);	

	document.getElementsByClassName('languages_container')[0].appendChild(div);
}

//skills

let first_column = Math.ceil(author.skills.length / 2);
let second_column = author.skills.length - first_column;

for(let x = 0; x < author.skills.length; x++){
	let p  = document.createElement('p');

	p.innerText = author.skills[x];

	if(x < first_column){
		skills_columns[0].appendChild(p);
	}
	else {
		skills_columns[1].appendChild(p);
	}
}