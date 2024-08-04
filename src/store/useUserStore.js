// src/stores/useUserStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        movies: [
            { name: "img1.jpg", index: 1, title: "DeadPool", price: "$45", genre: "Comedy" },
            { name: "img2.jpg", index: 2, title: "Barbie", price: "$35", genre: "Comedy" },
            { name: "img3.jpg", index: 3, title: "Avengers", price: "$60", genre: "Action" },
            { name: "img4.jpg", index: 4, title: "Her", price: "$30", genre: "sci-fi" },
            { name: "img5.jpg", index: 5, title: "Angry Birds", price: "$56", genre: "Cartoon" },
        ],
        movieName: "",
        index: 1,
        number: 1,
        filtered: [],
        isClicked: false
    }),
    getters: {
        filteredMovies: (state) => {
            if (state.isClicked) {

                return state.filtered
            }
            else {
                return state.movies
            }

        }

    },
    actions: {
        handleClick(number, genre) {
            this.isClicked = true
            this.index = number;
            if (genre === 'All') {
                this.filtered = this.movies;
            } else {
                this.filtered = this.movies.filter((movie) => movie.genre === genre);
            }
        },
        handleSearch() {
            this.filtered = this.movies.filter(
                (movie) =>
                    movie.title.toLowerCase().includes(
                        this.movieName.toLowerCase()
                    )

            )
        }

    }
})
