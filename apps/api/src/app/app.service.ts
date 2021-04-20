import { Injectable } from '@nestjs/common';
import { userData } from './data/user-data';

@Injectable()
export class AppService {

  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }

  getUserData(userId: number) {
    const user = userData.find((data) => data.userId == userId);
    return user;
  }

  isCorruptedByUser(userId: number) {
    const user = this.getUserData(userId);
    const filesystem = user.filesystem as any [];
    const corruptedFiles = filesystem.filter(fs => {
      return fs['corrupted'];
    });
    return corruptedFiles.length > 0;
  }

  getCorruptedFile(fileSystem: any[]) { 
    const findCorrupted = (file, corruptedFiles = []) => {
      if (file['corrupted']) {
        corruptedFiles.push(file);
      } else if (file['children'] && file['children'].length > 0) {
        findCorrupted(file['children'], corruptedFiles)
      }
      return corruptedFiles;
    };

    let filesCorrupted = [];
    fileSystem.forEach(fs => {
      filesCorrupted = filesCorrupted.concat(findCorrupted(fs));
      
    });
    return filesCorrupted;
  }

  isCorruptedByFilesystem(data: any) {
    const corruptedFiles = this.getCorruptedFile(data.filesystem)
    return corruptedFiles.length > 0;
  }

  getCorrupted(userId: number) {
    const user = this.getUserData(userId);
    const userFiles = user.filesystem as [];
    const corruptedArray = userFiles.filter(fs => {
      return fs['corrupted'];
    });
      return corruptedArray;
  }

  getUncorrupted(userId: number, strict: boolean = true) {
    const user = this.getUserData(userId);
    const userFiles = user.filesystem as [];
    const corruptedArray = userFiles.filter(fs => {
      return !fs['corrupted'];
    });
      return corruptedArray;
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
