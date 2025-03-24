import { beforeEach, describe, expect, it } from "vitest";
import { useStore as store } from "./index";

const course = {
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
};

const initialState = store.getState();

describe("Player", () => {
  describe("when the play action is dispatched", () => {
    beforeEach(() => {
      store.setState(initialState);
    });

    it("should be able to play", () => {
      const { play } = store.getState();

      play([1, 2]);

      const { currentModuleIndex, currentLessonIndex } = store.getState();

      expect(currentModuleIndex).toBe(1);
      expect(currentLessonIndex).toBe(2);
    });
  });

  describe("when the nextVideo action is dispatched", () => {
    beforeEach(() => {
      store.setState(initialState);
    });

    it("should be able to play next lesson automatically", () => {
      store.setState({ course });

      const { nextVideo } = store.getState();

      nextVideo();

      const { currentModuleIndex, currentLessonIndex } = store.getState();

      expect(currentModuleIndex).toBe(0);
      expect(currentLessonIndex).toBe(1);
    });

    it("should be able to jump for the next module automatically", () => {
      store.setState({ course });

      const { nextVideo } = store.getState();

      store.setState({ currentLessonIndex: 1 });

      nextVideo();

      const { currentModuleIndex, currentLessonIndex } = store.getState();

      expect(currentModuleIndex).toBe(1);
      expect(currentLessonIndex).toBe(0);
    });
  });

  describe("when the nextVideo action is dispatched", () => {
    describe("and the current module is the last one", () => {
      beforeEach(() => {
        store.setState(initialState);
      });

      it("should not update the module or the lesson", () => {
        store.setState({ course });

        const { nextVideo } = store.getState();

        store.setState({ currentModuleIndex: 1, currentLessonIndex: 1 });

        nextVideo();

        const { currentModuleIndex, currentLessonIndex } = store.getState();

        expect(currentModuleIndex).toBe(1);
        expect(currentLessonIndex).toBe(1);
      });
    });
  });
});
