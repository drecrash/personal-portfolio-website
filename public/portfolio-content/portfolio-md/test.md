# Application
## Run Locally
To run this application locally, please `cd` into the `phonebook-frontend` directory and run `npm run`.
## View Live
A live demonstration of this application (with automatic deploys) can be found at https://main.d19t44xy0725fq.amplifyapp.com/


# Docs
## User Folder
### Folder Structure
When users create posts, the post data is stored in their individual user folder. They also have a folder that stores their post metadata and user configurations. The user folder is structured as follows:

    └───phone-number
        │   content_storage.json
        │   user_configuration.json
        │
        └───twilio-sender-number
            ├───media
            └───text

The phone-number folder is named the user's phone number, and the twilio-sender-number is the number the user sends messages to.

There can potentially be multiple twilio-sender-numbers for private and public webpages

### Content Storage JSON
The `content_storage.json` file stores the metadata of each post, and is structured as follows:

        {
            "post-uuid": {
                "textual_content": path-to-text.txt,
                "media_metadata": [],
                "sender": twilio-number,
                "date": date-sent
            }
        }

The following is an example of a user's content storage folder:

    {
        "420f53a5-c943-4658-95fe-2c61d628bc17": {
            "textual_content": "+15103301270/text/55453873-c21e-4834-babc-ac1bbb10c920.txt",
            "media_metadata": [],
            "sender": "+15103301270",
            "date": "2024-03-09 19:41:10.648827"
        },
        "00e02ff6-6eda-4c32-848e-8cc3fa26471b": {
            "textual_content": "+15103301270/text/1b8e0bee-bbf1-4562-afb4-5af6865adb07.txt",
            "media_metadata": [],
            "sender": "+15103301270",
            "date": "2024-03-09 19:41:50.656929"
        },
        "4fe15949-bc50-43c8-840e-d88f1dfc731a": {
            "textual_content": "+15103301270/text/ec5dd5b2-89d9-4503-a5f3-c92fd6ec6981.txt",
            "media_metadata": [
                "+15103301270/media/ME6ee7200564f7084b44b418a535ab9ba3.jpeg",
                "+15103301270/media/MEf6e033e231c390d14509e2e3825e8e58.jpeg",
                "+15103301270/media/MEa6b10c14bd5756fb8413a8e29b008204.jpeg"
            ],
            "sender": "+15103301270",
            "date": "2024-03-09 19:44:27.333079"
        }
    }

### User Configuration JSON
The `user_configuration.json` stores basic information regarding the user and their profile. It is structured as follows:

    {
        "enabled": true-or-false,
        "platform": sms-whatsapp-etc,
        "nick": user-nickname
    }

`enabled` marks whether the user's profile is enabled or not. It can be disabled through the superadmin panel <br>
`platorm` marks what platform the user is utilizing, such as SMS or whatsapp <br>
`nick` marks the user's subdomain nickname. An example nick could be "jellyfish", where their full website domain is "jellyfish.phonebook.today"

## API

### Basics
The primary invoke URL for the API is `https://n6nqi0evp5.execute-api.us-east-2.amazonaws.com/dev`

### Fetch content metadata
A POST request can be made to `/read-content-file`, using the following parameters in order to get the contents of the JSON content file in a user's folder as well as the user's preferences/configuration.

    data: {
        "number": phone-number-of-user,
        "site-name": user-subdomain,
        "start-date": start-date,
        "end-date": end-date
        }

    headers: {
        'Content-Type': 'application/json',
        "x-api-key": your-api-key
        }

#### Value Definitions

The `site-name` is ther user's subdomain address. For instance, if the user's full URL was "goldfish.phonebook.today", their subdomain would be "goldfish". <br>
<br>
The `start-date` and `end-date` parameters should both be in the ISO 8601 format. An example is `2024-03-13 01:07:20.294135`. <br>
<br>
If only `start-date` is given, then the method will return all posts after the date given. <br>
If only `end-date` is given, then the method will return all posts during and before the date given  <br>
If both are given, then it will return all posts from the `start-date` through the `end-date` <br>
If neither are given, it will return all posts from the present day. <br>
If no posts are found in the present day, and no dates are given, it will return all posts from the latest day.

#### Parameter Requiredness
The `start-date` and `end-date` parameters are both fully optional. <br>
Using both `number` and `site-name` is unnecessary, as only one is required.


#### Response
The response has two sections, `post_content` and `user_preferences`. The `post_content` holds the received post metadata and the `user_preferences` holds the user's configurations (profile photo, privacy settings, etc). An example response is as follows:

    {
        'post_content': 
            {
                '5fb9dbc7-2db6-4782-a788-3fda2296d1de': 
                    {
                        'textual_content': '+15103301270/text/fa5f83f7-7517-4604-9303-a732f330014f.txt',
                        'media_metadata': [],
                        'sender': '+15103301270',
                        'date': '2024-03-13 00:53:38.343174'
                    },
                '68763b8d-2dcd-4a38-a9ea-790e30bb804c': 
                    {
                        'textual_content': '+15103301270/text/b66db432-fddb-4b6c-8df9-dcf106d82e65.txt',
                        'media_metadata': [
                            '+15103301270/media/ME404db271a95ca3fe0ee5f43bc5d0281e.jpeg',
                            '+15103301270/media/MEc24f661c8103ed93f006ac79515a2601.jpeg',
                            '+15103301270/media/MEbb6766b1c424e389c1245103c89c321a.jpeg'
                        ],
                        'sender': '+15103301270',
                        'date': '2024-03-13 01:07:20.294135'
                    }
            },
        'user_preferences': {}
    }




### Get all user data
A GET request can be made to `/list-folders` in order to receive a JSON dictionary of all users and some data regarding their profiles. An example response is as follows:

    {
    "+14154977211": 
        {"Nick": "unexpert426", 
        "Size": 727195, 
        "Disabled": false
        }
    "+14155739857": 
        {"Nick": "flabbergast523", 
        "Size": 82, 
        "Disabled": false
        }
    }

#### Key Explanations
The overall key is their phone number, AKA their folder name. <br>
The `Nick` is their assigned subdomain nickname. <br>
The `Size` is the size they are taking up in storage (in bytes) <br>
The `Disabled` marks if their account is disabled or not **DISABLING ACCOUNTS HAS NOT YET BEEN IMPLEMENTED** <br>

### Get the frequency of posts on dates
A POST request can be made to `/get-date-frequency`, using the following parameters in order to get a dictionary of dates a user has posted on, as well as how many times they posted on those days.

    data: {
        "number": phone-number-of-user,
        "site-name": user-subdomain
        }

    headers: {
        'Content-Type': 'application/json',
        "x-api-key": your-api-key
        }

#### Value Definitions
Utilize the same definitions as the `/read-content-file` method

#### Parameter Requiredness
Using both `number` and `site-name` is unnecessary; only one is required.

#### Response
The following is an example of a response:

    {
        "2024-03-18": 5,
        "2024-03-19": 2
    }

### Fetch total contents

<span style="color:red">**<i>WARNING:</i> THIS IS GENERALLY NOT USEFUL; USE THE READ CONTENT FILE METHOD FOR MOST PURPOSES<br>
THIS ALSO DOES NOT WORK AS OF 3/12/2024**</span><br>
A POST request can be made to `/fetch-folder`, using the following parameters in order to get a list of the total contents of a user's folder:

    data: {
        "folderName": phone-number-of-user
        }

    headers: {
        'Content-Type': 'application/json'
        }