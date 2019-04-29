import { IMeetingTable, IMeetingTemplate } from '../stores/types';
const DATA = require('../../tmp-data.ts');

const API_URL = '';
  /**
   * Загрузка встечь текущей недели
   * 0-6 номер дня недели
   * 7 - на всю неделю (по умолчанию)
   */
const loadAllMeetings = async (numberDay = 7) => {
  //const res = await fetch(
  //  `/ttm/v1/meeting_templates?day_week=${numberDay}`, 
  //  { credentials: 'include' },
  //);
//
  return [];
}

  /**
   * Получение пользователя с сервера
   */
const getUser = async () => {
  const res = await fetch(
    `${API_URL}/ttm/v1/login`,
    { credentials: 'include' },
  );
  return res.json()
}

/**
 * Отмена встречи один раз
 */
const editDataMeeting = async (id: number, data: object) => {
  const dataJSON = JSON.stringify(data);
  const res = await fetch(
    `${API_URL}/ttm/v1/meetings/${id}`,
    { 
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json',
        'credentials'  : 'include',
      },
      body: dataJSON
    },
  );
  return res;
}

const loadMeeting = async (idMeeting: number) => {
  const res = await fetch(
    `${API_URL}/ttm/v1/meetings/${idMeeting}`, 
    { credentials: 'include' },
  );
  return res.json();
}


export {
  loadAllMeetings,
  loadMeeting,
  getUser,
  editDataMeeting,
}