/*
 * @Description: user
 * @Date: 2022-03-25 15:40:10
 * @Author: LeiLiu
 */
import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess, getRequestToken, requestParams } from './_util';

const UserListMock = [
  {
    userId: '1',
    username: 'admin',
    nickname: 'manager',
    password: 'admin123',
    token: 'fakeToken1',
    auths: [],
    modules: [],
    is_admin: 1,
    role_name: '管理员',
    mobile: 13000000000,
    first_login: '2021-11-11 12:00',
  },
  {
    userId: '2',
    username: 'guest',
    password: '123456',
    nickname: 'guest',
    token: 'fakeToken2',
    auths: [],
    modules: ['home', 'website'],
    is_admin: 0,
    role_name: '游客',
    mobile: 18000000000,
    first_login: '2021-11-11 12:12',
  },
];

export default [
  // mock user login
  {
    url: '/v1/user/login',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body;
      const checkUser = UserListMock.find(
        (item) => item.username === username && password === item.password,
      );
      if (!checkUser) {
        return resultError('Incorrect account or password！');
      }
      checkUser.token = Math.random().toString(36).slice(2);
      return resultSuccess(checkUser);
    },
  },
  {
    url: '/v1/user/permission',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = UserListMock.find((item) => item.token === token);
      if (!checkUser) {
        return resultError('The corresponding user information was not obtained!');
      }
      return resultSuccess(checkUser);
    },
  },
  {
    url: '/v1/user/logout',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = UserListMock.find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid token!');
      }
      return resultSuccess(undefined, { message: 'Token has been destroyed' });
    },
  },
  {
    url: '/v1/account/info',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = UserListMock.find((item) => item.token === token);
      if (!checkUser) {
        return resultError('The corresponding user information was not obtained!');
      }
      return resultSuccess(checkUser);
    },
  },
] as MockMethod[];
