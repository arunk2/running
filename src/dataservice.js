import DataService from './service';

export const athletesService = {
  getLogin() {
    return DataService.get('http://csika.org:8082/login');
  },
  getAthletes(url) {
    return DataService.get(url);
  }
};
