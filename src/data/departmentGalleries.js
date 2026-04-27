const departmentGalleries = {
  anaesthesia: {
    folder: "anaesthesia",
    images: ["img1.webp", "img2.webp", "img3.webp", "img4.webp"],
  },
  community_medicine: {
    folder: "CommunityMedicine",
    images: ["community_med.webp", "community_med3.webp", "community_med4.webp"],
  },
  dentistry: {
    folder: "dentistry",
    images: ["den.webp", "den2.webp", "den3.webp", "den4.webp"],
  },
  emergency_medicine: {
    folder: "emergency_medicine",
    images: ["img1.webp"],
  },
  ent: {
    folder: "ent",
    images: [
      "img1.webp",
      "img2.webp",
      "img3.webp",
      "img4.webp",
      "img5.webp",
      "img6.webp",
      "img7.webp",
      "img8.webp",
    ],
  },
  general_medicine: {
    folder: "general_medicine",
    images: ["img1.webp", "img2.webp"],
  },
  obg: {
    folder: "obg",
    images: ["img1.webp", "img2.webp", "img3.webp", "img4.webp"],
  },
  opthalmology: {
    folder: "opthalmology",
    images: ["img1.webp", "img2.webp", "img3.webp", "img4.webp"],
  },
  ortho: {
    folder: "ortho",
    images: ["img1.webp", "img2.webp"],
  },
  paediatrics: {
    folder: "paediatrics",
    images: ["img1.webp", "img2.webp", "img3.webp"],
  },
  pathology: {
    folder: "pathology",
    images: [
      "img1.webp",
      "img2.webp",
      "img3.webp",
      "img4.webp",
      "img5.webp",
      "img6.webp",
      "img7.webp",
      "img8.webp",
    ],
  },
  phychiatry: {
    folder: "phychiatry",
    images: ["img2.webp", "img3.webp", "img4.webp"],
  },
  physiology: {
    folder: "physiology",
    images: [
      "img1.webp",
      "img2.webp",
      "img3.webp",
      "img4.webp",
      "img5.webp",
      "img6.webp",
      "img7.webp",
      "img8.webp",
      "img9.webp",
      "img10.webp",
    ],
  },
  pulmonary: {
    folder: "pulmonary",
    images: ["img1.webp"],
  },
};

export const getDepartmentGalleryData = (departmentKey) => {
  const gallery = departmentGalleries[departmentKey];

  if (!gallery) {
    return [];
  }

  return gallery.images.map((imageName) => ({
    img: `/assets/images/departments/${gallery.folder}/${imageName}`,
    name: "",
  }));
};

export default departmentGalleries;
