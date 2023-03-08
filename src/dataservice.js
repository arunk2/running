import DataService from './service';

export const athletesService = {
  getLogin() {
    return DataService.get('http://ec2-3-218-241-2.compute-1.amazonaws.com:8082/login');
  },
  getLoginAcess(url) {
    return DataService.get(url);
  },
  getAthletes() {
    return DataService.get('http://ec2-3-218-241-2.compute-1.amazonaws.com:8082/athletes');
  },
  getActivites() {
    return DataService.get('http://ec2-3-218-241-2.compute-1.amazonaws.com:8082/activities');
  }
};
