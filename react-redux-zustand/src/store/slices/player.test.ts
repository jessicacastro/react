import { describe, expect, it } from "vitest";
import {
  nextVideo,
  play,
  player as playerReducer,
  PlayerState,
} from "./player";

const exampleState: PlayerState = {
  course: {
    id: 1,
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
          {
            id: "w-DW4DhDfcw",
            title: "Estilização do Post",
            duration: "10:05",
          },
        ],
      },
      {
        id: 2,
        title: "Estrutura da aplicação",
        lessons: [
          {
            id: "gE48FQXRZ_o",
            title: "Componente: Comment",
            duration: "13:45",
          },
          { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
        ],
      },
    ],
  },
  isLoading: false,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
};

describe("Player", () => {
  describe("when the play action is dispatched", () => {
    it("should be able to play", () => {
      const state = playerReducer(exampleState, play([1, 2]));

      expect(state.currentModuleIndex).toBe(1);
      expect(state.currentLessonIndex).toBe(2);
    });
  });

  describe("when the nextVideo action is dispatched", () => {
    it("should be able to play next lesson automatically", () => {
      const state = playerReducer(exampleState, nextVideo());

      expect(state.currentModuleIndex).toBe(0);
      expect(state.currentLessonIndex).toBe(1);
    });

    it("should be able to jump for the next module automatically", () => {
      const state = playerReducer(
        { ...exampleState, currentLessonIndex: 1 },
        nextVideo()
      );

      expect(state.currentModuleIndex).toBe(1);
      expect(state.currentLessonIndex).toBe(0);
    });
  });

  describe("when the nextVideo action is dispatched", () => {
    describe("and the current module is the last one", () => {
      it("should not update the module or the lesson", () => {
        const state = playerReducer(
          { ...exampleState, currentModuleIndex: 1, currentLessonIndex: 1 },
          nextVideo()
        );

        expect(state.currentModuleIndex).toBe(1);
        expect(state.currentLessonIndex).toBe(1);
      });
    });
  });
});
