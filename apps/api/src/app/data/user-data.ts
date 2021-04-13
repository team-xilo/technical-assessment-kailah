export const userData = [
  {
    userId: 1,
    name: 'Alice',
    filesystem: [
      {
        name: 'Folder 1',
        type: 'folder',
        id: 2,
        children: [
          {
            name: 'Folder 1.1',
            id: 3,
            type: 'folder',
            children: [
              { name: 'File 1.1.1', type: 'file', extension: 'pdf', id: 4, corrupted: true },
              { name: 'File 1.1.2', type: 'file', extension: 'jpg', id: 5 },
              { name: 'File 1.1.3', type: 'file', extension: 'pdf', id: 6, corrupted: true },
            ],
          },
          {
            name: 'Folder 1.2',
            id: 7,
            type: 'folder',
            children: [
              { name: 'File 1.2.1', type: 'file', extension: 'txt', id: 8, corrupted: true },
              { name: 'File 1.2.2', type: 'file', extension: 'jpg', id: 9 },
              { name: 'File 1.2.3', type: 'file', extension: 'pdf', id: 10 },
            ],
          },
        ],
      },
      {
        name: 'Folder 2',
        id: 11,
        type: 'folder',
        children: [
          {
            name: 'Folder 2.1',
            id: 12,
            type: 'folder',
            children: [
              { name: 'File 2.1.1', type: 'file', extension: 'pdf', id: 13 },
              { name: 'File 2.1.2', type: 'file', extension: 'jpg', id: 14 },
              { name: 'File 2.1.3', type: 'file', extension: 'pdf', id: 15, corrupted: true },
            ],
          },
          { name: 'File 2.2', type: 'file', extension: 'pdf', id: 16, corrupted: true },
          { name: 'File 2.3', type: 'file', extension: 'txt', id: 17, corrupted: true },
        ],
      },
      {
        name: 'Folder 3',
        id: 18,
        type: 'folder',
        corrupted: true,
        children: [
          { name: 'Folder 3.1', type: 'folder', children: [], id: 19 },
          { name: 'Folder 3.2', type: 'folder', children: [], id: 20 },
          {
            name: 'Folder 3.3',
            id: 21,
            type: 'folder',
            children: [
              { name: 'File 3.3.1', type: 'file', extension: 'txt', id: 22 },
              { name: 'File 3.3.2', type: 'file', extension: 'pdf', id: 23 },
              { name: 'File 3.3.3', type: 'file', extension: 'jpg', id: 24 },
            ],
          },
        ],
      },
    ],
  },
  {
    userId: 2,
    name: 'Bob',
    filesystem: [
      { name: 'File 1', type: 'file', extension: 'pdf', id: 34 },
      { name: 'File 2', type: 'file', extension: 'pdf', id: 35 },
      { name: 'File 3', type: 'file', extension: 'pdf', id: 36 },
      { name: 'File 4', type: 'file', extension: 'pdf', id: 37 },
      { name: 'File 5', type: 'file', extension: 'pdf', id: 38 },
      {
        name: 'Folder 1',
        id: 25,
        type: 'folder',
        children: [
          {
            name: 'Folder 1.1',
            id: 26,
            type: 'folder',
            children: [
              { name: 'File 1.1.1', type: 'file', extension: 'pdf', id: 29 },
              { name: 'File 1.1.2', type: 'file', extension: 'jpg', id: 28 },
              { name: 'File 1.1.3', type: 'file', extension: 'pdf', id: 27 },
            ],
          },
          {
            name: 'Folder 1.2',
            id: 30,
            type: 'folder',
            children: [
              { name: 'File 1.2.1', type: 'file', extension: 'txt', id: 31 },
              { name: 'File 1.2.2', type: 'file', extension: 'jpg', id: 32 },
              { name: 'File 1.2.3', type: 'file', extension: 'pdf', id: 33 },
            ],
          },
        ],
      },
      {
        name: 'Folder 2',
        type: 'folder',
        id: 39,
        children: [
          { name: 'File 2.2', type: 'file', extension: 'pdf', id: 43 },
          { name: 'File 2.3', type: 'file', extension: 'txt', id: 44 },
          {
            name: 'Folder 2.1',
            type: 'folder',
            id: 65,
            children: [
              { name: 'File 2.1.1', type: 'file', extension: 'pdf', id: 40 },
              { name: 'File 2.1.2', type: 'file', extension: 'jpg', id: 41 },
              { name: 'File 2.1.3', type: 'file', extension: 'pdf', id: 42 },
            ],
          },
        ],
      },
      {
        name: 'Folder 3',
        type: 'folder',
        id: 45,
        children: [
          { name: 'File 3.1', type: 'file', extension: 'txt', id: 46 },
          { name: 'Folder 3.2', type: 'folder', children: [], id: 47 },
          {
            name: 'Folder 3.3',
            type: 'folder',
            id: 48,
            children: [
              { name: 'File 3.3.1', type: 'file', extension: 'txt', id: 49 },
              { name: 'File 3.3.2', type: 'file', extension: 'pdf', id: 50 },
              { name: 'File 3.3.3', type: 'file', extension: 'jpg', id: 51 },
            ],
          },
        ],
      },
    ],
  },
  {
    userId: 3,
    name: 'Carlos',
    filesystem: [
      { name: 'foo', type: 'file', extension: 'pdf', id: 52 },
      { name: 'fuzz', type: 'file', extension: 'jpg', id: 53 },
      { name: 'fizz', type: 'file', extension: 'pdf', id: 54 },
      { name: 'bar', type: 'file', extension: 'txt', id: 55 },
      { name: 'buzz', type: 'file', extension: 'pdf', id: 56 },
      {
        name: 'meep',
        type: 'folder',
        id: 57,
        children: [
          {
            name: 'morp',
            type: 'folder',
            id: 71,
            children: [
              { name: 'foo fizz', type: 'file', extension: 'pdf', id: 58 },
              { name: 'bizz buzz', type: 'file', extension: 'jpg', id: 59 },
              { name: 'meep fizz', type: 'file', extension: 'pdf', id: 60 },
            ],
          },
          {
            name: 'foo buzz',
            type: 'folder',
            id: 61,
            children: [
              { name: 'buzz bar', type: 'file', extension: 'txt', id: 62 },
              { name: 'fizz meep', type: 'file', extension: 'jpg', id: 63 },
              { name: 'morp foo', type: 'file', extension: 'pdf', id: 64 },
            ],
          },
        ],
      },
      {
        name: 'baz',
        type: 'folder',
        id: 72,
        children: [
          {
            name: 'baz buzz',
            type: 'folder',
            id: 73,
            children: [
              { name: 'fuzz morp', type: 'file', extension: 'pdf', id: 66 },
              { name: 'meep buzz', type: 'file', extension: 'jpg', id: 67 },
              { name: 'baz bar', type: 'file', extension: 'pdf', id: 68 },
            ],
          },
          { name: 'buzz buzz', type: 'file', extension: 'pdf', id: 69 },
          { name: 'fizz foo', type: 'file', extension: 'txt', id: 70 },
        ],
      },
      {
        name: 'bar baz bar',
        type: 'folder',
        id: 71,
        children: [
          { name: 'morp morp', type: 'file', extension: 'txt', id: 93 },
          { name: 'meep baz', type: 'folder', children: [], id: 94 },
          {
            name: 'foo fuzz',
            type: 'folder',
            id: 74,
            children: [
              { name: 'buzz foo fizz', type: 'file', extension: 'txt', id: 95 },
              { name: 'bar baz fuzz', type: 'file', extension: 'pdf', id: 96 },
              { name: 'fizz fuzz', type: 'file', extension: 'jpg', id: 97 },
            ],
          },
        ],
      },
    ],
  },
  {
    userId: 4,
    name: 'Daniel',
    filesystem: [
      {
        name: 'Folder 1',
        type: 'folder',
        id: 75,
        children: [
          {
            name: 'Folder 1.1',
            type: 'folder',
            id: 76,
            children: [
              { name: 'File 1.1.1', type: 'file', extension: 'pdf', id: 98 },
              { name: 'File 1.1.2', type: 'file', extension: 'jpg', id: 99 },
              { name: 'File 1.1.3', type: 'file', extension: 'pdf', id: 100, corrupted: true },
              {
                name: 'Folder 1.1.1',
                type: 'folder',
                id: 77,
                corrupted: true,
                children: [
                  {
                    name: 'Folder 1.1.1.1',
                    type: 'folder',
                    id: 78,
                    corrupted: true,
                    children: [
                      {
                        name: 'Folder 1.1.1.1.1',
                        type: 'folder',
                        id: 79,
                        children: [
                          {
                            name: 'File 1.1.1.1.1.1',
                            type: 'file',
                            extension: 'pdf',
                            id: 80,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'Folder 1.2',
            type: 'folder',
            id: 81,
            children: [
              { name: 'File 1.2.1', type: 'file', extension: 'txt', id: 101 },
              { name: 'File 1.2.2', type: 'file', extension: 'jpg', id: 102 },
              { name: 'File 1.2.3', type: 'file', extension: 'pdf', id: 103 },
            ],
          },
        ],
      },
      {
        name: 'Folder 2',
        type: 'folder',
        id: 82,
        children: [
          {
            name: 'Folder 2.1',
            type: 'folder',
            id: 83,
            children: [
              { name: 'File 2.1.1', type: 'file', extension: 'pdf', id: 104 },
              { name: 'File 2.1.2', type: 'file', extension: 'jpg', id: 105, corrupted: true },
              { name: 'File 2.1.3', type: 'file', extension: 'pdf', id: 106 },
            ],
          },
          { name: 'File 2.2', type: 'file', extension: 'pdf', id: 107 },
          { name: 'File 2.3', type: 'file', extension: 'txt', id: 108 },
        ],
      },
      {
        name: 'Folder 3',
        type: 'folder',
        id: 84,
        children: [
          { name: 'File 3.1', type: 'file', extension: 'txt', id: 109 },
          { name: 'Folder 3.2', type: 'folder', children: [], id: 110 },
          {
            name: 'Folder 3.3',
            type: 'folder',
            id: 85,
            corrupted: true,
            children: [
              { name: 'File 3.3.1', type: 'file', extension: 'txt', id: 111, corrupted: true },
              { name: 'File 3.3.2', type: 'file', extension: 'pdf', id: 112, corrupted: true },
              { name: 'File 3.3.3', type: 'file', extension: 'jpg', id: 113, corrupted: true },
            ],
          },
        ],
      },
    ],
  },
  {
    userId: 5,
    name: 'Emma',
    filesystem: [
      {
        name: 'Folder 1',
        type: 'folder',
        id: 86,
        children: [
          { name: 'File 1.1', type: 'file', extension: 'pdf', id: 114, corrupted: true },
          { name: 'File 1.3', type: 'file', extension: 'pdf', id: 116 },
          {
            name: 'Folder 1.1',
            type: 'folder',
            id: 87,
            children: [],
          },
          { name: 'File 1.6', type: 'file', extension: 'pdf', id: 119 },
          { name: 'File 1.4', type: 'file', extension: 'txt', id: 117, corrupted: true },
          { name: 'File 1.5', type: 'file', extension: 'jpg', id: 118 },
          { name: 'File 1.2', type: 'file', extension: 'jpg', id: 115 },
          {
            name: 'Folder 1.2',
            type: 'folder',
            id: 88,
            children: [],
          },
        ],
      },
      {
        name: 'Folder 2',
        type: 'folder',
        id: 89,
        children: [
          { name: 'File 2.1.1', type: 'file', extension: 'pdf', id: 120 },
          { name: 'File 2.1.2', type: 'file', extension: 'jpg', id: 121 },
          { name: 'File 2.1.3', type: 'file', extension: 'pdf', id: 122 },
          {
            name: 'Folder 2.1',
            type: 'folder',
            id: 90,
            children: [],
          },
          { name: 'File 2.2', type: 'file', extension: 'pdf', id: 123 },
          { name: 'File 2.3', type: 'file', extension: 'txt', id: 124 },
        ],
      },
      { name: 'File 1', type: 'file', extension: 'txt', id: 127 },
      { name: 'File 2', type: 'file', extension: 'pdf', id: 128 },
      { name: 'File 3', type: 'file', extension: 'jpg', id: 129 },
      {
        name: 'Folder 3',
        type: 'folder',
        id: 91,
        children: [
          { name: 'File 3.1', type: 'file', extension: 'txt', id: 125 },
          { name: 'Folder 3.2', type: 'folder', children: [], id: 126 },
          {
            name: 'Folder 3.3',
            type: 'folder',
            id: 92,
            children: [],
          },
        ],
      },
    ],
  },
];
