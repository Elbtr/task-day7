class Testimonials {
  #image = "";
  #quote = "";

  constructor(image, quote) {
    this.#image = image;
    this.#quote = quote;
  }

  get image() {
    return this.#image;
  }

  get quote() {
    return this.#quote;
  }

  get author() {
    throw new Error("get author() method must be implemented. ");
  }

  get testimonialHTMl() {
    return `
    <div class="card-testimonial">
        <div class="image-testimonial">
            <img src="${this.image}" alt="testimonial" />
        </div>
        <div class="content-testimonial">
            <h4 class="quote">${this.quote}</h4>
            <p class="author">~${this.author}</p>
        </div>
     </div>
            `;
  }
}

class AuthorTestimonial extends Testimonials {
  #author = "";

  constructor(image, quote, author) {
    super(image, quote);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

const testimonial1 = new AuthorTestimonial(
  "https://images.pexels.com/photos/15126611/pexels-photo-15126611/free-photo-of-proyek-oleh-profil-salon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "i am singel woman are you like me?",
  "Chandri Anggara"
);

const testimonial2 = new AuthorTestimonial(
  "https://images.pexels.com/photos/15157314/pexels-photo-15157314/free-photo-of-kacamata-hitam-wanita-duduk-rokok.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "udud dulu gak tuh! wkwkwk",
  "Gelora_B"
);

const testimonial3 = new AuthorTestimonial(
  "https://images.pexels.com/photos/13926527/pexels-photo-13926527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "don't judge someone by their cover",
  "Hadi Saerani"
);

const testimonial4 = new AuthorTestimonial(
  "https://images.pexels.com/photos/15093015/pexels-photo-15093015/free-photo-of-romantis-antik.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "to keep calm is my choice",
  "El BTR"
);

let testimonialsData = [testimonial1, testimonial2, testimonial3, testimonial4];

console.log(testimonialsData);

let testimonialHtml = "";

for (let i = 0; i < testimonialsData.length; i++) {
  testimonialHtml += testimonialsData[i].testimonialHTMl;
}

document.getElementById("card-content-testimonials").innerHTML =
  testimonialHtml;
