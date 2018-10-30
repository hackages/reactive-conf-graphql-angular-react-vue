import Login from "@/components/authentication/Login";
import Register from "@/components/authentication/Register";
import ConferenceDetails from "@/components/conferences/ConferenceDetails";
import ConferencesCardList from "@/components/conferences/ConferencesCardList";
import Main from "@/components/Main";
import ConferenceForm from "@/components/management/conference/ConferenceForm";
import ConferenceTableList from "@/components/management/conference/ConferenceTableList";
import TalksOnConference from "@/components/management/conference/TalksOnConference";
import SpeakerOnTalk from "@/components/management/talks/SpeakerOnTalk";
import TalkForm from "@/components/management/talks/TalkForm";
import TalkTableList from "@/components/management/talks/TalkTableList";
import SpeakerDetails from "@/components/speaker/SpeakerDetails";
import TalkDetails from "@/components/talk/TalkDetails";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/authentication/login",
      component: Login,
      name: "authentication-login"
    },
    {
      path: "/authentication/register",
      component: Register,
      name: "authentication-register"
    },
    {
      path: "/",
      component: Main,
      children: [
        {
          path: "",
          name: "conferences-card-list",
          component: ConferencesCardList
        },
        {
          path: "conference/:id",
          name: "conference-details",
          component: ConferenceDetails
        },
        {
          path: "talk/:id",
          component: TalkDetails,
          pathMatch: "full"
        },
        {
          path: "speaker/:id",
          component: SpeakerDetails,
          pathMatch: "full"
        },
        {
          path: "secure/conferences",
          name: "conferences",
          component: ConferenceTableList
        },
        {
          path: "secure/talks",
          name: "talks",
          component: TalkTableList
        },
        {
          path: "secure/talk/:id",
          component: TalkForm,
          name: "secure-talk-form-update"
        },
        {
          path: "secure/talk",
          component: TalkForm,
          name: "secure-talk-form-add"
        },
        {
          path: "secure/talk/:id/speaker",
          component: SpeakerOnTalk,
          name: "secure-manage-speakers-on-talk"
        },
        {
          path: "secure/conference/:id",
          component: ConferenceForm,
          name: "secure-conference-form-update"
        },
        {
          path: "secure/conference",
          component: ConferenceForm,
          name: "secure-conference-form-add"
        },
        {
          path: "secure/conference/:id/talks",
          component: TalksOnConference,
          name: "secure-manage-talks-on-conference"
        }
      ]
    }
  ]
});
