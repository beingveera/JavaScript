//Contact Constructor
function Contact(fname,lname,phone){
	this.fname=fname;
	this.lname=lname;
	this.phone=phone;
}

// Display Constructor

function Display(){

}

//Add to contactBook 

Display.prototype.add = function(contact){
	let tablebody=document.getElementById('tablebody');
	let con = `<tr><td>
			${contact.fname}</td><td>
			${contact.lname}</td><td>
			${contact.phone}</td></tr>`;
	tablebody.innerHTML+=con;

	let msg=document.getElementById('msg');
	msg.innerHTML=`<div class="alert alert-success alert-dismissible " role="alert">
				  <strong>Congress ${contact.fname}</strong> Your data inserted successfully....
				  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
				</div>`;
	setTimeout(() => {
		msg.innerHTML='';},2000);

}

Display.prototype.clear= function(){
	let contactform=document.getElementById('contactform');
	contactform.reset();
}

let contactform=document.getElementById('contactform');
contactform.addEventListener('submit',contactformSubmit);

function contactformSubmit(e){
	e.preventDefault();
	let first=document.getElementById('fname').value;
	let last=document.getElementById('lname').value;
	let ph=document.getElementById('phone').value;	
	let contact = new Contact(first,last,ph);


	console.log(contact);

	let display = new Display();
	display.add(contact);
	display.clear();
}



