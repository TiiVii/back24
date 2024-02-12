// Note: db functions are async and must be called with await from the controller
// How to handle errors in controller?
import promisePool from '../utils/database.mjs';

const listAllEntries = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM DiaryEntries');
    console.log('rows', rows);
    return rows;
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const findEntryById = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM DiaryEntries WHERE entry_id = ?', [id]);
    console.log('rows', rows);
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

const addEntry = async (entry) => {
  const {user_id, entry_date, mood, weight, sleep_hours, notes} = entry;
  const sql = `INSERT INTO DiaryEntries (user_id, entry_date, mood, weight, sleep_hours, notes)
               VALUES (?, ?, ?, ?, ?, ?)`;
  const params = [user_id, entry_date, mood, weight, sleep_hours, notes];
  try {
    const rows = await promisePool.query(sql, params);
    console.log('rows', rows);
    return {entry_id: rows[0].insertId};
  } catch (e) {
    console.error('error', e.message);
    return {error: e.message};
  }
};

// Function to delete an entry by ID
const deleteEntryById = async (id) => {
  try {
    const sql = 'DELETE FROM DiaryEntries WHERE entry_id = ?';
    const [result] = await promisePool.query(sql, [id]);
    if (result.affectedRows === 1) {
      return { message: 'Entry deleted successfully' };
    } else {
      return { error: 'Entry not found' };
    }
  } catch (e) {
    console.error('Error deleting entry:', e.message);
    return { error: e.message };
  }
};

// Function to update an entry by ID
const updateEntryById = async (id, newData) => {
  try {
    const { user_id, entry_date, mood, weight, sleep_hours, notes } = newData;
    const sql = `
      UPDATE DiaryEntries
      SET 
        user_id = ?,
        entry_date = ?,
        mood = ?,
        weight = ?,
        sleep_hours = ?,
        notes = ?
      WHERE
        entry_id = ?
    `;
    
    const [result] = await promisePool.query(sql, [user_id, entry_date, mood, weight, sleep_hours, notes, id]);
    if (result.affectedRows === 1) {
      return { message: 'Entry updated successfully' };
    } else {
      return { error: 'Entry not found' };
    }
  } catch (error) {
    console.error('Error updating entry:', error.message);
    return { error: error.message };
  }
};


export {listAllEntries, findEntryById, addEntry, deleteEntryById, updateEntryById};