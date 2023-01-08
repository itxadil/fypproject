# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []


class ActionInternetProblem1(Action):

    def name(self) -> Text:
        return "action_hardware_issue"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        # for e in entites:
        #     if e['entity'] == "LAN_issue"
        #         name = e['value']
        #     if name == "LAN" or name == "Local area network" or name == "Local Network"
        #         #dispatcher.utter_message()
        dispatcher.utter_message(text="1. Check Server Machine Status\n2. Check LAN Cable Connectivity with PC\n3.Check LAN Cable Connection with the Network Switch"
                                "\n4. Check LAN Cable Conected with the Routers\n5. Check LAN Cable Connected with the Routers\n6. Check Routers status \n"
                                "7. Check if Each Class Getting Routers Signals over WIFI\n")

        return []


class ActionInternetProblem2(Action):

    def name(self) -> Text:
        return "action_connectivity_issue"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        dispatcher.utter_message(text="1.Check LAN Cable from modem connected with the USB Ethernet Card/ Modem Card\n2. Check Network on settings"
        "Check Browsing on web Browser \n 3. Check network settings on the PTCL server machine by clicking on the connectivity icon from top menu and check If both the" 
        "local network and Ethernet network are enabled if not set them to enable")
        return []
    
class ActionInternetProblem3(Action):

    def name(self) -> Text:
        return "action_4G_issue"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        dispatcher.utter_message(text="1.Type A cable of 4G device connected with the USB Port \n2. Check Browsing on web browser\n"
        "3. Check network settings on the server machine by clicking on the connectivity icon from top menu and check If both the local network and Ethernet network are enabled if not set them to enable")
        return []
    
class ActionDeliverLectures(Action):

    def name(self) -> Text:
        return "action_Deliver_lectures"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="1. Login (From teacher account)\n2. Go to Deliver >> Lectures"
        "\n 3. Click on Start Lecture 4. local network and Ethernet network are enabled if not set them to enable"
        "Check If the timetables are created if not then create time table for the desired lecture and repeat step 1 to 4")
        return []


class ActionAttemptQuiz(Action):

    def name(self) -> Text:
        return "action_attempt_quiz"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="1. Login (From student's account)\n2. ......")
        return []

class ActionGenerateQuiz(Action):

    def name(self) -> Text:
        return "action_generate_quiz"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="1. Login (From Teacher's account)\n2. ......")
        return []

class ActionToChangeInfo(Action):

    def name(self) -> Text:
        return "action_for_editing_info"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Follow the Following Steps:\n1- Login into your Account.\n2- click on the profile icon, shown on the top right corner of screen.\n3- Select the option 'Profile'.\n4- Now, on the screen, click 'Edit' button.\n5- Under the heading of 'basic Information', you can edit the desired data.")

        return []

class ActionToChangeSocialInfo(Action):

    def name(self) -> Text:
        return "action_for_editing_social_info"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Follow the Following Steps:\n1- Login into your Account.\n2- Click on the profile icon, shown on the top right corner of screen.\n3- Select the option 'Profile'.\n4- Now, on the screen, click 'Edit' button.\n5- Under the heading of 'Social Information', you can edit the links of different Social Media Platforms.")
        return []

class ActionToChangeSocialInfo(Action):

    def name(self) -> Text:
        return "action_for_resume"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Follow the Following Steps:\n1- Login into your Account.\n2- Click on the profile icon, shown on the top right corner of screen.\n3- Select the option 'Profile'.\n4- Now, on the screen, click 'Edit' button.\n5- Under the heading of 'Social Information', you can select the file form your device in 'Resume' box.\n6- Document file format should be: pdf, .doc, .docx or .txt")
        return []

class ActionToChangeSocialInfo(Action):

    def name(self) -> Text:
        return "action_for_picture"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Follow the Following Steps:\n1- Login into your Account.\n2- Click on the profile icon, shown on the top right corner of screen.\n3- Select the option 'Profile'.\n4- Now, on the screen, click 'Edit' button.\n5- Under the heading of 'Other Information', you can select the picture form your device in 'Teacher/student Photo' box.\n6- Image file format should be: .jpg, .jpeg, .png or .gi")
        return []