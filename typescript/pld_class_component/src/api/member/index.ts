/*
 * @Author: Zzceaon
 * @Date: 2020-08-11 20:27:26
 * @LastEditTime: 2020-08-11 20:32:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\typescript\pld_class_component\src\api\member\index.ts
 */
import { MemberEntity } from '../../model';
import { members } from './mockData';

const fetchMembers = (): Promise<MemberEntity[]> => {  // Promise -> @types/node
  return Promise.resolve(members);
};

export const memberAPI = {
  fetchMembers,
};