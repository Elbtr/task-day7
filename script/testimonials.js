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
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "Mantap sekali jasanya!",
  "Abel Dustin"
);

const testimonial2 = new AuthorTestimonial(
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "Keren lah pokoknya",
  "Cintara Surya"
);

const testimonial3 = new AuthorTestimonial(
  "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "Wuhu keren cuy!",
  "Maul"
);

let testimonialsData = [testimonial1, testimonial2, testimonial3];

console.log(testimonialsData);

let testimonialHtml = "";

for (let i = 0; i < testimonialsData.length; i++) {
  testimonialHtml += testimonialsData[i].testimonialHTMl;
}

document.getElementById("card-content-testimonials").innerHTML =
  testimonialHtml;
