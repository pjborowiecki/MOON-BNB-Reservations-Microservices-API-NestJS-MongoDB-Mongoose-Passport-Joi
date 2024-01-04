# MOON BNB

**Work in progress. Please check back soon**

Tired of the same old Earth vacations? Ready for a celestial adventure that's out of this world? Look no further than MoonBnB, the first and only vacation rental service on the Moon!

#### 🚀 Space-Age Stays

Choose from a variety of MoonBnB listings, from cozy lunar cabins to futuristic space domes. Our accommodations are equipped with state-of-the-art life support systems, anti-gravity beds for a good night's sleep, and windows designed for optimal stargazing. Feel the tranquility of the cosmos as you unwind in your private moon base.

#### 🌙 Lunar Luxuries Await You

Step into a new era of space tourism with our lunar accommodations. Whether you're a seasoned astronaut or a first-time space traveler, MoonBnB has the perfect lodging for you. Enjoy breathtaking views of Earthrise, take a leisurely stroll in the one-sixth gravity, and witness the moonlit landscapes that will leave you awestruck.

#### 🛰️ Local Experiences

Immerse yourself in the lunar lifestyle with our curated local experiences. Take a guided moonwalk tour, enjoy a low-gravity spa day, or savor the flavors of space cuisine at our cosmic cafes. MoonBnB hosts are dedicated to making your stay unforgettable, providing insider tips on the best lunar spots to explore.

#### 🪶 Zero-Gravity Adventures

Looking for a thrill? MoonBnB offers a range of lunar activities for the adventurous spirit. From zero-gravity bungee jumping to moon buggy races, there's no shortage of excitement. Capture your unforgettable moments with Earth in the background for envy-inducing social media posts.

#### 🔒 Secure and Seamless Booking

Rest easy knowing that your MoonBnB stay is secure. Our booking process is as smooth as a rocket launch, and our lunar customer support team is always ready to assist. We've got the logistics covered so you can focus on enjoying your lunar vacation.

#### 🌌 MoonBnB - Beyond Your Wildest Orbits

MoonBnB isn't just a vacation; it's a celestial escape that's truly out of this world. Book your lunar adventure today and make memories that are, quite literally, astronomical! 🌌🌠

<!-- DOCKER -->

- `docker build ../../ -f Dockerfile -t moonbnb_reservations`
- `docker-compose up`
- `docker-compose down`
- `docker run moonbnb_reservations`

- `docker build -t reservations -f ./Dockerfile ../../`
- `docker tag reservations ${gcloud_repo_url}/production`
- `docker image push ${gcloud_repo_url}/production`

- `docker-compose up --build`
