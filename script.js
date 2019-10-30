function Addressbook() {
  this.contacts = [];
  this.add = function () {};
  this.delete = function () {

  };
  this.print = function () {};
}

let addressBook = new Addressbook();

function Contact(name, email, relation, number) {
  this.name = name;
  this.email = email;
  this.relation = relation;
  this.number = number;
}

addressBook.contacts.push(
  new Contact("john", "reuelbeats@gmail.com", "brother", "7373737")
);




// adding here.
setTimeout(function () {
  document
    .querySelector(".addbutton")
    .addEventListener("click", function (event) {

      event.preventDefault();
      addressBook.contacts.push(
        new Contact(
          document.querySelector("#name").value,
          document.querySelector("#email").value,
          document.querySelector("select").value,
          document.querySelector("#number").value
        )
      );

      // additional stuff to do when clicking add
      document.querySelector(".containContacts").innerHTML += ` 
      <div class="contact one">
          <section class="contactInfo person1">
              <span class="ContactName">Name:<span></span></span><br>
              <span class="ContactEmail">Email:<span></span></span><br>
              <span class="ContactPhone">Phone:<span></span></span><br>
              <span class="ContactRelation">Relation:<span></span></span><br>
          </section>
          <div class="trash"></div>
      </div>
          
          `;

      for (let i = 0; i < addressBook.contacts.length; i++) {
        document.querySelectorAll(".ContactName span")[i].innerText = addressBook.contacts[i].name;
        document.querySelectorAll(".ContactEmail span")[i].innerText = addressBook.contacts[i].email;
        document.querySelectorAll(".ContactPhone span")[i].innerText = addressBook.contacts[i].number;
        document.querySelectorAll(".ContactRelation span")[i].innerText = addressBook.contacts[i].relation;
      }
    });
}, 1000);




setTimeout(function () {
  document.querySelector(".ContactName span").innerText = addressBook.contacts[0].name;
  document.querySelector(".ContactEmail span").innerText = addressBook.contacts[0].email;
  document.querySelector(".ContactPhone span").innerText = addressBook.contacts[0].number;
  document.querySelector(".ContactRelation span").innerText = addressBook.contacts[0].relation;
}, )




document.addEventListener("click", function (event) {
  if (event.target.classList.value == "trash") {
    
    // delete this containContacts
    // delete this addressBook.contacts index
  }
})