import { getWeather } from "./service";

export default {
  namespace: "pageMainModule",
  state: {
    fundDatas: [],
  },
  effects: {
    *getDatas({ payload }, { call, put }) {
      const response = yield getWeather(payload);
    },
  },
};
