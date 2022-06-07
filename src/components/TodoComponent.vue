<template lang="">
    <div class="todoComponent">
      <div class="todoComponent__newTask-input">
        <label for="enterTask">Enter your task</label>
        <input
          type="text"
          id="enterTask"
          v-model="enterTask"
        />
        <button @click.prevent="createNewTask" class="todoComponent__newTask-btn">Create</button>
      </div>
      <div class="tasks">
        <div  v-for="task in this.$store.state.tasksList" class="task">{{task.text}}
          <div class="btns">
            <button @click.prevent="editTask" class="btn-edit" :id='task.id'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path d="M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zm-5.81-3.71L1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>
              </svg>
              <div class="modal">
                <div class="modal-container">
                  <svg @click.prevent="closeModal" class="modal-cross" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.19914 1.19914C1.58967 0.808619 2.22283 0.808619 2.61336 1.19914L8 6.58579L13.3866 1.19914C13.7772 0.808619 14.4103 0.808619 14.8009 1.19914C15.1914 1.58967 15.1914 2.22283 14.8009 2.61336L9.41421 8L14.8009 13.3866C15.1914 13.7772 15.1914 14.4103 14.8009 14.8009C14.4103 15.1914 13.7772 15.1914 13.3866 14.8009L8 9.41421L2.61336 14.8009C2.22283 15.1914 1.58967 15.1914 1.19914 14.8009C0.808619 14.4103 0.808619 13.7772 1.19914 13.3866L6.58579 8L1.19914 2.61336C0.808619 2.22283 0.808619 1.58967 1.19914 1.19914Z" fill="#000"></path>
                  </svg>
                  <input type="text" v-model="editedTask" class="modal-input" placeholder="Edit your task" />
                  <button @click="setEditedTask" :id='task.id' class="modal-btn">Go!</button>
                </div>
              </div>
            </button>
            <button @click.prevent="deleteTask" class="btn-delete" :id='task.id'>
              <svg class="btn-cross" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.19914 1.19914C1.58967 0.808619 2.22283 0.808619 2.61336 1.19914L8 6.58579L13.3866 1.19914C13.7772 0.808619 14.4103 0.808619 14.8009 1.19914C15.1914 1.58967 15.1914 2.22283 14.8009 2.61336L9.41421 8L14.8009 13.3866C15.1914 13.7772 15.1914 14.4103 14.8009 14.8009C14.4103 15.1914 13.7772 15.1914 13.3866 14.8009L8 9.41421L2.61336 14.8009C2.22283 15.1914 1.58967 15.1914 1.19914 14.8009C0.808619 14.4103 0.808619 13.7772 1.19914 13.3866L6.58579 8L1.19914 2.61336C0.808619 2.22283 0.808619 1.58967 1.19914 1.19914Z" fill="#F4F4F4"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "TodoComponent",
  data() {
    return {
      enterTask: "",
      editedTask: "",
      counter: 0,
    }
  },
  methods: {
    enterTask(e) {
      this.enterTask = e.target.value;
    },
    editedTask(e) {
      this.editedTask = e.target.value;
    },
    createNewTask() {
      if (this.enterTask !== "") {
        this.$store.dispatch("ADD_task", {id: Date.now(), text: this.enterTask,});
        this.enterTask = "";
      }
    },
    setEditedTask(e) {
      if (this.editedTask !== "") {
        e.target.parentElement.parentElement.style.display = "none"
        this.$store.dispatch("EDIT_task", {id: e.target.id, text: this.editedTask,});
        this.editedTask = "";
      }
    },
    editTask(e) {
      if (e.target.localName === "path") {
          e.target.parentElement.nextSibling.style.display = "flex"
      } else if (e.target.localName === "svg") {
          e.target.nextSibling.style.display = "flex"
      } else {
        e.target.lastChild.style.display = "flex"
      }
    },
    deleteTask(e) {
      if (e.target.localName === "path") {
          this.$store.dispatch("DEL_task", e.target.parentElement.parentElement.id)
      } else if (e.target.localName === "svg") {
          this.$store.dispatch("DEL_task", e.target.parentElement.id)
      } else {
        this.$store.dispatch("DEL_task", e.target.id);
      }
    },
    closeModal(e) {
      if (e.target.localName === "svg") {
        e.target.parentElement.parentElement.style.display = "none"
      } else {
        e.target.parentElement.parentElement.parentElement.style.display = "none"
      }
      
    }
    
  },
}
</script>
<style lang="scss" scoped>
    .todoComponent {
      margin: 20px;

      .todoComponent__newTask-input {
        display: flex;
        flex-direction: row;
        justify-content: center;

        @media (max-width: 500px) {
          flex-direction: column;

          label {
            margin-right: 0 !important;
            margin-bottom: 10px;
          }

          button {
            margin-left: 0 !important;
            margin-top: 10px;
            width: 100px;
            align-self: center;
          }
        }
        
        label {
          margin-right: 20px;
        }

        button {
          margin-left: 20px;
        }
      }

      .tasks {
        width: 100%;
        align-self: start;
        background: #fff;
        width: 100%;
        margin-top: 10px;
        

        .task {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 40px;
          padding: 10px;
          border-bottom: 1px solid #000;

          div.btns {
            display: flex;
            position: relative;
            
            button {
              width: 50px;
              height: 30px;
              border: none;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              margin: 0;
            }
            .btn-edit {
              background: rgb(164, 208, 164);

              .modal {
                display: none;
                width: 100vw;
                height: 100vh;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(100, 74, 74, 0.6);
                z-index: 10;
                justify-content: center;
                align-items: center;

                

                .modal-container {
                  width: 300px;
                  height: 300px;
                  background: #fff;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  padding: 20px;
                  position: relative;
                  
                  .modal-cross {
                    color: #000;
                    align-self: end;
                    position: absolute;
                    top: 20px;
                  }

                  .modal-input {
                    width: 100%;
                  }

                  .modal-btn {
                    margin-top: 30px;
                    background: rgb(164, 208, 164);
                  }
                }
              }
            }

            .btn-delete {
              background: rgb(233, 138, 138);
            }
          }
        }
      }
    }
</style>