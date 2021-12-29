interface INetworked {
  host: string;
}

class FileSystemObject {
  isFİle(): this is FileRep {
    return this instanceof FileRep;
  }

  isDirectory(): this is Directory {
    return this instanceof Directory;
  }

  isNetworked(): this is INetworked {
    return this.networked;
  }

  constructor(public path: string, private networked: boolean) {}
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}

class Directory extends FileSystemObject {
  children: FileSystemObject[];
}

const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");

if (fso.isFİle()) {
  fso.content;
  // fso: FileRep
} else if (fso.isDirectory()) {
  fso.children;
  // fso: Directory
} else if (fso.isNetworked()) {
  fso.host;
  // fso: FileSystemObject & INetworked
}

//

class Box2<T> {
  value?: T;

  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}

const box = new Box2();
box.value = "V";
// Box2<unknown>.value?: unknown

if (box.hasValue()) {
  box.value;
}
