export default {
  TOURNAMENT: {
    BASE: '/tournaments',
    GET_ONE: id => `/tournaments/${id}`,
    UPDATE_SETTINGS: '/tournaments/updateSettings',
  },
  GROUP: {
    BASE: '/groups',
    ADD_PARTICIPANT: '/groups/addParticipant',
    START: '/groups/start',
    ADD_RESULT: '/groups/addResult',
  },
  PARTICIPANT: {
    BASE: '/participants',
    GET_UNUSED: '/participants/getUnusedInTournament',
  },
  TEAM: {
    BASE: '/teams',
  },
  USER: {
    LOGIN: '/user/login',
  },
};
