import request from '@/utils/request'

export const getUserInfo = () =>
  request({
    url: '/api/home/getUserInfo',
    method: 'GET'
  });

export const getBacklog = () =>
  request({
    url: '/api/home/userTasks',
    method: 'GET'
  });

export const getRoleList = () =>
  request({
    url: '/api/home/getUserRoles',
    method: 'GET'
  });

export const setRole = id =>
  request({
    url: '/api/home/setRole',
    method: 'GET',
    params: {
      id
    }
  });

export const getProjectByCode = code =>
  request({
    url: '/project/getIdByCode',
    methos: 'GET',
    params: {
      project_code: code
    }
  });

export const setUserRole = roleId =>
  request({
    url: '/site/setRole',
    method: 'POST',
    data: `id=${roleId}`
  });
