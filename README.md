Sony TV Remote application for Tizen based Galaxy Watch-es. The implementation is based on Ip Control specification(https://pro-bravia.sony.net/develop/integrate/ip-control/) [IRCC-IP](https://pro-bravia.sony.net/develop/integrate/ircc-ip/overview/index.html) specification.

# PROLOGUE

This project is the result of the bad user experience I had so long time using the physical remote of my Sony Bravia TV.

What I didn't like about it:
 - the buttos are super clicky and noisy
 - buttons noise where waking up my newborn child
 - buttons noise where distracting home mates
 - the remote always gets lost 🤷‍♂️
 - the remote batteries can discharge in a very invonvenient moment
 - the phone (alternative to physical remote) always gets lost or is on charging
 - my little daughter is often crying when I take the remote. She expects only cartoons from the TV 🤷‍♂️ 🙂

Don't know why I expected to find easily a suitable app to control my Sony TV (Android TV) when bought my Galaxy Watch. 
Such a functionalitiy seemed very natural to me. 
Unfortunately, there was no such alternative for Tizen watches, and looks like there will not be one soon or ever, considering Samsung's move towards Wear OS with their 4th iteration.

# What this project is

This project represents a Tizen Web application that allows you to control your Sony Bravia TV's through the IP-Control API.
Luckily there's such an API(thank you Sony), so building it was only a matter of learning a bit of my most disliked languages (HTML + JS).
Just in case, I have an excuse for this poor JS code 😺

Sicne my initial goal was to have at least something workable, when the app was already usable I quickly ran out of intereset for this Tizen implementation, due various Tizen limitations that made me 😞 and did require too much effort to spend on a viable implementation that will not compromise the performance and responsivness of the app.

I decided to open-source it in it's "incomplete" form and [Hacktoberfest](https://hacktoberfest.digitalocean.com/) seemed the perfect period to me.

# Future roadmap
Of course I'm not giving up 🙌 and most likely I will migrate to Galaxy Watch 4 soon(as an Android Developer) and this will require me to migrate it to Androdi(at least)
1. Migrate the core remote logic to KMM (because why not)
2. Build WearOS and WatchOS clients on top of KMM core
3. Build a remote configurator for easier customisation for squared or rounded interfaces