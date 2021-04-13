import { Injectable } from '@nestjs/common';
import { userData } from './data/user-data';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }

  getUserData(userId: number) {
    const user = userData.find((data) => data.userId === userId);
    return user;
  }

  // Simulates reuploading a corrupted file or folder.
  reupload(item: any) {
    if (item.id % 13 === 0) {
      return Promise.reject('Error');
    } else if (item.id % 7 === 0) {
      return Promise.resolve({
        ...item,
        corrupted: true,
      });
    } else {
      return Promise.resolve({
        ...item,
        corrupted: false,
      });
    }
  }
}
