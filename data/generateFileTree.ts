export interface FileNode {
  name: string;
  type: 'file';
  path: string;
}

export interface FolderNode {
  name: string;
  type: 'folder';
  path: string;
  children: TreeNode[];
}

export type TreeNode = FileNode | FolderNode;

const extensions = ['ts', 'tsx', 'js', 'json', 'md'];

function buildTree(depth: number, breadth: number, base: string): TreeNode[] {
  const nodes: TreeNode[] = [];
  for (let i = 0; i < breadth; i++) {
    const name = `item-${i}`;
    const currentPath = base ? `${base}/${name}` : name;
    if (depth > 0 && i % 3 === 0) {
      nodes.push({
        name: `folder-${i}`,
        type: 'folder',
        path: currentPath,
        children: buildTree(depth - 1, breadth, currentPath),
      });
    } else {
      const ext = extensions[i % extensions.length];
      nodes.push({
        name: `file-${i}.${ext}`,
        type: 'file',
        path: `${currentPath}.${ext}`,
      });
    }
  }
  return nodes;
}

export function generateFileTree(depth = 4, breadth = 10): FolderNode {
  return {
    name: 'root',
    type: 'folder',
    path: '',
    children: buildTree(depth, breadth, ''),
  };
}
