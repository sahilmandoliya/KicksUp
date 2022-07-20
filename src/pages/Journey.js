import {Container} from 'react-bootstrap'

const Journey= () => {
  return (
    <Container className="d-flex flex-column mt-3 p-0 mb-5 bg-body rounded text-white" style={{width: "86vw", }} >
      <div className="underlay1 w-100"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/grasspic.jpg)`,
        }} >
        <h1 className="position-absolute top-50 start-50 translate-middle display-3 text-center" style={{zIndex: "10", }}>
          THE JOURNEY
        </h1>
      </div>
      <div className="underlay2 w-100 bg-white text-black"
        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/websitelogo.png)`,}}>
          <h4>THE ROOTS</h4>
          <p>
            Our entire life when we shop, we are limited by choices that are there
            in a store. We are often on the side where we buy our favourite
            coloured shoes made by someone else but what if we designed it? What
            if we could involve in the making of a shoe we want to buy? This
            little thought sprouted to become what we are today, KICKSUP! ;)
          </p>
          <h4 className="pt-3">CHAPTER I</h4>
          <p>
            Understanding the trends in the industry and what the users think when
            they buy were our top priorities before we moved further in the
            building. After weeks of fruitful research, we stepped into the user's
            shoes and look at what we plan to do. It's a great joy for the users
            if they are involved in the making. We're heading into an era of
            technology and people prefer online shopping to shopping in an outlet.
          </p>
          <h4 className="pt-3">CHAPTER II</h4>
          <p>
            Every milestone begins with a single step and before KICKSUP sprouted,
            the team manufactured in small scale with two users a month. This
            experience was crucial to our brand as this is our first practical
            experience. Interacting with the users was the best thing ever. The
            positive reviews and support from people motivated us to push our
            limits further.
          </p>
          <h4 className="pt-3">KICKSUP</h4>{" "}
          <p>
            Here we are, made a perfect platform for you to involve in the making
            of a shoe you want to buy! We have evolved over since we started out.
            We wish to help you more and make KICKSUP a bigger team. Design your 
            shoe and be a part of our journey!
          </p>
        </div>
    </Container>
  )
}

export default Journey