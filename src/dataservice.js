import DataService from './service';

export const athletesService = {
  getLogin() {
    return DataService.get('http://csika.org:8082/login');
  },
  getLoginAcess(url) {
    return DataService.get(url);
  },
  getAthletes() {
    return DataService.get('http://csika.org:8082/athletes');
  }
};
