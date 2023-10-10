/**
 * Penerapan Algoritma Rekursif - Mencari Anggota Keluarga dalam Pohon Genealogi
 *
 * 1. Sediakan data pohon genealogi dalam bentuk objek JavaScript
 * 2. Masukkan nama anggota keluarga yang hendak dicari
 * 3. Cari nama anggota keluarga dalam properti `name` di dalam objek
 * 4. Jika tidak ditemukan dan properti `children` berisi data, lanjut ke properti `children`, ulangi langkah ketiga
 * 5. Jika tidak ditemukan dan properti `children` tidak berisi data, kembalikan nilai `null`.
 * 6. Jika ditemukan, kembalikan objek dengan properti `name` bersangkutan.
 */

function findFamilyMember(tree, target) {
  if (tree.name === target) {
    return tree;
  } else if (tree.children.length > 0) {
    for (const child of tree.children) {
      const found = findFamilyMember(child, target);
      if (found) return found;
    }
  }
  return null;
}

const familyTree = {
  name: 'Santoso',
  children: [
    {
      name: 'Suhadi',
      children: [
        {
          name: 'Suyanto',
          children: [{ name: 'Akmal', children: [] }],
        },
        {
          name: 'Sukanto',
          children: [],
        },
      ],
    },
    {
      name: 'Dono',
      children: [{ name: 'Budiono', children: [] }],
    },
  ],
};

const person1 = 'Budiono';
const person2 = 'Asep';

const familyMember1 = findFamilyMember(familyTree, person1);
const familyMember2 = findFamilyMember(familyTree, person2);

console.log(familyMember1); // { name: 'Budiono', children: [] }
console.log(familyMember2); // null
