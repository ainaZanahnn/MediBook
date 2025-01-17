/** @format */

function filterApp() {
  return {
    dropdownOpen: false,
    currentCategory: "Specialization",
    searchQuery: "",
    pageNumber: 0,
    size: 6, // Number of items per page
    cards: [
      //specialization
      {
        id: 1,
        category: "Specialization",
        title: "Periodontics",
        description:
          " specialty of dentistry that studies supporting structures of teeth.",
        buttonText: "View Detail",
        image: "image/specialization/periodontics.jpg",
        link: "ProviderPage.html?id=1",
      },
      {
        id: 2,
        category: "Specialization",
        title: "Radiology",
        description:
          "Using imaging techniques to diagnose and treat medical conditions.",
        buttonText: "View Detail",
        image: "image/specialization/radiology.jpg",
        link: "ProviderPage.html?id=2",
      },
      {
        id: 3,
        category: "Specialization",
        title: "Dermatology",
        description:
          "Specializing in skin, hair, and nail disorders and treatments.",
        buttonText: "View Detail",
        image: "image/specialization/dermatology.jpg",
        link: "ProviderPage.html?id=3",
      },
      {
        id: 4,
        category: "Specialization",
        title: "Psychiatry",
        description:
          "Focused on diagnosing and treating mental health disorders.",
        buttonText: "View Detail",
        image: "image/specialization/psychiatry.jpg",
        link: "ProviderPage.html?id=4",
      },
      {
        id: 5,
        category: "Specialization",
        title: "Psychiatry",
        description:
          "Treating musculoskeletal conditions including bones, joints, and muscles.",
        buttonText: "View Detail",
        image: "image/specialization/orthopedic.jpg",
        link: "ProviderPage.html?id=5",
      },
      {
        id: 6,
        category: "Specialization",
        title: "Pediatrics",
        description:
          "Providing healthcare and treatment for infants, children, and adolescents.",
        buttonText: "View Detail",
        image: "image/specialization/pediatric.jpg",
        link: "ProviderPage.html?id=6",
      },
      {
        id: 7,
        category: "Specialization",
        title: "Neurology",
        description:
          "Diagnosing and treating disorders of the nervous system, including the brain and spinal cord.",
        buttonText: "View Detail",
        image: "image/specialization/neurology.jpg",
        link: "ProviderPage.html?id=11",
      },
      {
        id: 8,
        category: "Specialization",
        title: "Cardiology",
        description:
          "Focused on diagnosing and treating heart and cardiovascular disorders.",
        buttonText: "View Detail",
        image: "image/specialization/cardiology.jpg",
        link: "ProviderPage.html?id=8",
      },
      {
        id: 9,
        category: "Specialization",
        title: "Ophthalmology",
        description:
          "Specializing in eye and vision care, including diagnosis and treatment of eye conditions.",
        buttonText: "View Detail",
        image: "image/specialization/ophthalmology.jpg",
        link: "ProviderPage.html?id=9",
      },
      //location
      {
        id: 10,
        category: "Location",
        title: "Hospital Shah Alam",
        description: "Seksyen 7, Shah Alam, Selangor.",
        buttonText: "Learn More",
        image: "image/location/hospital_shahalam.jpg",
        link: "https://maps.app.goo.gl/3VGYbTQN4yweKUVN9",
      },
      {
        id: 11,
        category: "Location",
        title: "Hospital Al-Sultan Abdullah ",
        description: "SKS359 Pintu Utama UiTM, 42300 Puncak Alam, Selangor.",
        buttonText: "Learn More",
        image: "image/location/palam.jpg",
        link: "https://maps.app.goo.gl/7RQd7Ekccv5XHW5T6",
      },
      {
        id: 12,
        category: "Location",
        title: "Hospital Sungai Buloh",
        description: "Jalan Hospital, 47000 Sungai Buloh, Selangor.",
        buttonText: "Learn More",
        image: "image/location/sb.jpg",
        link: "https://maps.app.goo.gl/ioy1W25RweCWzCRY9",
      },
      {
        id: 13,
        category: "Location",
        title: "Putrajaya Hospital",
        description:
          "Jalan P9, Presint 7, 62250 Putrajaya, Wilayah Persekutuan Putrajaya.",
        buttonText: "Learn More",
        image: "image/location/putrajaya.jpg",
        link: "https://maps.app.goo.gl/gbRBFa76RZPJmYGk6",
      },
    ],
    filteredCards: [],
    get paginatedCards() {
      const start = this.pageNumber * this.size;
      const end = start + this.size;
      return this.filteredCards.slice(start, end);
    },
    get totalPages() {
      return Math.ceil(this.filteredCards.length / this.size);
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    updateCategory(category) {
      this.currentCategory = category;
      this.filterCards();
      this.pageNumber = 0; // Reset to first page
    },
    filterCards() {
      this.filteredCards = this.cards.filter(
        (card) =>
          this.currentCategory === "" || card.category === this.currentCategory
      );
    },
    searchCards() {
      const searchTerm = this.searchQuery.toLowerCase();
      this.filteredCards = this.cards.filter(
        (card) =>
          card.category === this.currentCategory &&
          card.title.toLowerCase().includes(searchTerm)
      );
      this.pageNumber = 0; // Reset to first page
    },
    prevPage() {
      if (this.pageNumber > 0) {
        this.pageNumber--;
      }
    },
    nextPage() {
      if (this.pageNumber < this.totalPages - 1) {
        this.pageNumber++;
      }
    },
    viewPage(index) {
      this.pageNumber = index;
    },
    init() {
      this.filterCards();
    },
  };
}
