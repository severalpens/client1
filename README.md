Git - 1/1
Describe the layout of your git repository and the approach you took for version control.

Git version control was used and published via Github.com. 

3 branches were used: develop, test, production. While there was no dev-ops process involved this branch design enables the integration of a SDLC at a later point if required. All development commits were added to develop branch. Production branch is the client facing branch to be deployed. Test branch is used for integration and User Acceptance Testing. Feature branches were not used as they would add unnecessary complexity to a single person project. 

Modularization was incorporated into the project by subdividing code into smaller focused files where practical.

Frequent commits were used with the convention ‘<branch-name>:<category><description (optional)> ‘. Git aliases were used to facilitate regular commits without requirements for individual naming eg ‘misc = "!git add . && git commit -m $(git branch-name)': miscellaneous updates'".




Data Structures  - 1/1
Describe the main data structures used in the program. For example, how the users and groups are represented.

Chain: site 1-* group 1-* channel 1-* member 1-* message
User: user 1-* member


route	Code file	Decription
/	Index.js	Summary of all api end points
/api	Api.js	Parent route.
/api/chain	Chain.js	Storage and retrieval of hierarchically linked objects (chain). The hierarchy consists of: site, group, channel, member, message.
/api/user	User.js	User login information



Documentation - REST API - 1/2
The Angular front end should communicate with the Node.js server using a REST API. describe each route provided, parameters, return values, and what it does.

url (example querystring)	Verb	Body (example)	Description
/	get		Summary of all api end points
/api/chain/register	Post		Resgister a new user
/api/chain/login	post		login
/api/chain/namecheck?user=super	Get		Validate new username



Documentation - Angular Architecture - 1/1
Describe your Angular architecture in tems of components, services, and models.


