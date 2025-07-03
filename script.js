const testimonials = [
    {
        name: "R.Chaitanya",
        content:
             "rongali is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!",
        pictureurl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
     {
        name: "c.ramu",
        content:
             "I highly recommend rongali. It has been so important for us as we continue to grow our company.",
        pictureurl: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
     {
        name: "Ganesh",
        content:
             "rongali has helped my team and I stay on the same page. Previously, we were all over the board. Using rongali has definitely saved us time and money.",
        pictureurl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
];

const imgEl = document.querySelector("img");
const contentEl = document.querySelector(".content-one");
const nameEl = document.querySelector(".customer-name");

let index = 0;

testimonialUpdate();

function testimonialUpdate(){
    const {name, content, pictureurl} = testimonials[index];
    imgEl.src = pictureurl;
    contentEl.innerHTML = content;
    nameEl.innerHTML = name;
    index++;
    if (index === testimonials.length){
        index = 0;
    }
    setTimeout(()=>{
        testimonialUpdate();
    }, 2000);
}