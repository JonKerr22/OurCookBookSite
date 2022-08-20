import { Cookbook } from 'src/app//Models/cookbook';

export const DefaultCookbook: Cookbook = {
    id: -1,
    user_id: -1,
    cookbook_name: '',
    isUnlabeled: () => true
};