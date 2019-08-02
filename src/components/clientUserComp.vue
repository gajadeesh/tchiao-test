<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="4"></b-col>
      <b-col lg="12">
        <b-card header="Client Users">
        <!-- {{ info.data }} -->
          <!-- <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Age</th>
                
                <th scope="col" style="width:  5%">Edit</th>
                <th scope="col" style="width:  5%">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cuser,index) in items" :key="index">
                <th scope="row">{{index}}</th>
                <td>{{cuser.username}}</td>
                <td>{{cuser.age}}</td>
                
                <td><b-button block variant="info" class="btn-pill" @click="EModal = true"><i class="icon-note"/></b-button></td>
                <td><b-button block variant="danger" class="btn-pill" @click="DModal = true"><i class="icon-trash"/></b-button></td>
              </tr>
            </tbody>
          </table>-->
          <b-col sm="4" class="p-2">
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text>
                  <i class="icon-magnifier"></i>
                </b-input-group-text>
              </b-input-group-prepend>
              <b-form-input type="text" v-model="search" placeholder="Search"></b-form-input>
            </b-input-group>
          </b-col>

          <b-table
            hover
            :items="SearchFilter"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
          >
            <template slot="image" slot-scope="row">
              <b-img :src="row.item.url" rounded width="75px"></b-img>
              <!-- <b-button
                variant="info"
                class="btn-pill icon-note"
                @click.prevent="editClickHandler(row)"
              ></b-button>-->
            </template>

            <template slot="status" slot-scope="row">
              <div v-if="!row.item.status">
                <b-badge variant="danger">Deactive</b-badge>
              </div>
              <div v-else>
                <b-badge variant="success">Active</b-badge>
              </div>
            </template>
            <template slot="view" slot-scope="row">
              <b-button
                variant="warning"
                class="btn-pill icon-eye"
                @click.prevent="editClickHandler(row)"
              ></b-button>
            </template>
            <template slot="delete" slot-scope="row">
              <b-button
                variant="danger"
                class="btn-pill icon-trash"
                @click.prevent="deleteClickHandler(row)"
              ></b-button>
            </template>
          </b-table>
          <b-pagination v-model="currentPage" :per-page="perPage" aria-controls="my-table"></b-pagination>
        </b-card>

        <!-- <c-table :table-data="items" :per-page=12 :fields="fields" striped  caption="<i class='icon-people'></i> Clients Users"></c-table> -->
      </b-col>
    </b-row>
    <b-modal title="Email" v-model="EEmail" hide-footer>
      <b-form-group label="From" label-for="from" :label-cols="3" :horizontal="true">
        <b-form-input disabled id="from" type="text" autocomplete="name" value="admin@tchiao.com"></b-form-input>
      </b-form-group>
      <b-form-group label="To" label-for="to" :label-cols="3" :horizontal="true">
        <b-form-input id="to" type="text" autocomplete="name" :value="editSelected.email"></b-form-input>
      </b-form-group>
      <b-form-group label="Subject" label-for="subject" :label-cols="3" :horizontal="true">
        <b-form-input id="subject" type="text" autocomplete="name"></b-form-input>
      </b-form-group>
      <b-form-group label="Message" label-for="message" :label-cols="3" :horizontal="true">
        <!-- <label for="message-text" class="col-form-label">Message:</label> -->
        <textarea class="form-control" id="message-text"></textarea>
        
      </b-form-group>
      <b-button variant="primary" class="float-right">Send</b-button>
    </b-modal>
    <b-modal title="View User" v-model="EModal" hide-footer>
      <b-form-group label="Username" label-for="username" :label-cols="3" :horizontal="true">
        <b-form-input disabled id="username" type="text" autocomplete="name" :value="editSelected.username"></b-form-input>
      </b-form-group>
      <b-form-group label="Age" label-for="age" :label-cols="3" :horizontal="true">
        <b-form-input disabled id="age" type="number" autocomplete="name" :value="editSelected.age"></b-form-input>
      </b-form-group>

      <b-form-group label="Gender" label-for="genderSelect" :label-cols="3" :horizontal="true">
        <b-form-input
          disabled
          id="genderSelect"
          :value="editSelected.gender"
        ></b-form-input>
        
      </b-form-group>
      <b-form-group label="Email" label-for="email" :label-cols="3" :horizontal="true">
        <b-form-input disabled id="email" type="text" autocomplete="name" :value="editSelected.email"></b-form-input>
      </b-form-group>
      <b-form-group label="Phone" label-for="phone" :label-cols="3" :horizontal="true">
        <b-form-input disabled id="phone" type="text" autocomplete="name" :value="editSelected.phone"></b-form-input>
      </b-form-group>
      <!-- <b-carousel id="carousel1"
                          style="text-shadow: 1px 1px 2px #333;"
                          controls
                          indicators
                          background="#ababab"
                          :interval="4000"
                          img-width="200"
                          v-model="slide"
                          @sliding-start="onSlideStart"
                          @sliding-end="onSlideEnd"
              >
                <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" width="200"
                       :src="editSelected.url" alt="image slot">
                </b-carousel-slide>

              </b-carousel>

              <p class="mt-4">
                Slide #: {{ slide }}<br>
                Sliding: {{ sliding }}
      </p>-->
      <div class="container">
        <b-row>
          <b-col>
            <b-img :src="editSelected.url" left rounded width="275">
            <b-btn class="btnG">
              hey
            <!-- <i class="icon-trash"/> -->
            </b-btn>
           </b-img>
          </b-col>
           <b-col>
             <b-row>
                <b-img class="p-1" :src="editSelected.url" right rounded width="80"/>
                <b-img class="p-1" :src="editSelected.url" right rounded width="80"/>
             </b-row>
             <b-row>
                <b-img class="p-1" :src="editSelected.url" right rounded width="80"/>
                <b-img class="p-1" :src="editSelected.url" right rounded width="80"/>
             </b-row>
              <b-row>
                <b-img class="p-1" :src="editSelected.url" right rounded width="80"/>
                <b-img class="p-1" :src="editSelected.url" right rounded width="80"/>
             </b-row>
            
           </b-col>
          
      
        
        </b-row>
        <br/>
      <b-button block class="btn btn-success text-white"  v-if="!editSelected.status">Active</b-button>
      <b-button block class="btn btn-danger text-white" @click="EEmail = !EEmail" v-else>Deactive</b-button>
       
      </div>
      

    </b-modal>

    <b-modal
      title="Delete User"
      size="sm"
      class="modal-danger"
      :ok-disabled="Ddisable"
      v-model="DModal"
      ok-title="Delete"
      @ok="DModalHandler"
      ok-variant="danger"
    >
      <h5>Do you really wish to delete</h5>
      <h2 class="brand-danger-color">{{ DeleteSelected.username}}</h2>
      <b-form-group
        description="Please enter a your password"
        label="Password"
        label-for="basicPassword"
        :label-cols="3"
        :horizontal="true"
      >
        <b-form-input
          v-model="Dpassword"
          id="basicPassword"
          type="password"
          placeholder="Enter your password"
          autocomplete="current-password"
        ></b-form-input>
        {{ Dpassword}}
      </b-form-group>
    </b-modal>
  </div>
</template>
<script>
import cTable from "@/views/base/Table.vue";


export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      perPage: 10,
      currentPage: 1,
      search: "",
      EModal: false,
      EEmail: false,
      DModal: false,
      editSelected: [
        { username: "" }, 
        { age: 0 }, 
        { gender: "" }, 
        { email : ""},
        { status :null},
        { phone : ""},
        { url: "" }
        ],
      DeleteSelected: [
        { username: "" },
        { age: 0 },
        { gender: "" },
        { url: "" }
      ],
      Ddisable: true,
      Dpassword: "",
      password: "123",
      items: [
        {
          username: "Gaja",
          age: 50,
          gender: "male",
          email: "yenya@verizon.net",
          phone: "077 XXX XXXX",
          status: true,
          url:
            "http://help.wojilu.com/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg"
        },
        {
          username: "Ram",
          age: 60,
          gender: "male",
          status: false,
          email: "weazelman@mac.com",
          phone: "077 XXX XXXX",
          url:
            "http://viliclaw.com.au/wp-content/uploads/2017/09/testimonial-1.jpg"
        },
        {
          username: "Bawani",
          age: 25,
          gender: "female",
          status: false,
          email:'jshearer@sbcglobal.net',
          phone: "077 XXX XXXX",
          url: "https://www.cl.cam.ac.uk/women/profile/mateja.JPG"
        },
        {
          username: "Ranjana",
          age: 30,
          gender: "female",
          status: false,
          email: 'miltchev@att.net',
          phone: "077 XXX XXXX",
          url:
            "https://i.pinimg.com/originals/5d/21/3b/5d213b08ca32ac21694236cb4143bd30.jpg"
        },
        {
          username: "Gaja",
          age: 50,
          gender: "male",
          status: true,
          email: 'ryanshaw@live.com',
          phone: "077 XXX XXXX",
          url:
            "http://help.wojilu.com/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg"
        },
        {
          username: "Ram",
          age: 60,
          gender: "male",
          status: false,
          email:'chlim@aol.com',
          phone: "077 XXX XXXX",
          url:
            "http://viliclaw.com.au/wp-content/uploads/2017/09/testimonial-1.jpg"
        },
        {
          username: "Bawani",
          age: 25,
          gender: "female",
          status: false,
          email:'petersen@outlook.com',
          phone: "077 XXX XXXX",
          url: "https://www.cl.cam.ac.uk/women/profile/mateja.JPG"
        },
        {
          username: "Ranjana",
          age: 30,
          gender: "female",
          status: false,
          email:'noodles@yahoo.com',
          phone: "077 XXX XXXX",
          url:  
            "https://i.pinimg.com/originals/5d/21/3b/5d213b08ca32ac21694236cb4143bd30.jpg"
        },
        {
          username: "Gaja",
          age: 50,
          gender: "male",
          status: true,
          email:'british@verizon.net',
          phone: "077 XXX XXXX",
          url:
            "http://help.wojilu.com/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg"
        },
        {
          username: "Ram",
          age: 60,
          gender: "male",
          status: false,
          email:'dhrakar@yahoo.com',
          phone: "077 XXX XXXX",
          url:
            "http://viliclaw.com.au/wp-content/uploads/2017/09/testimonial-1.jpg"
        },
        {
          username: "Bawani",
          age: 25,
          gender: "female",
          status: false,
          email:'dhrakar@outlook.com',
          phone: "077 XXX XXXX",
          url: "https://www.cl.cam.ac.uk/women/profile/mateja.JPG"
        },
        {
          username: "Ranjana",
          age: 30,
          gender: "female",
          status: false,
          email: 'themer@outlook.com',
        
          url:
            "https://i.pinimg.com/originals/5d/21/3b/5d213b08ca32ac21694236cb4143bd30.jpg"
        },
        {
          username: "Gaja",
          age: 50,
          gender: "male",
          status: true,
          email: 'dhrakar@outlook.com',
          phone: "077 XXX XXXX",
          url:
            "http://help.wojilu.com/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg"
        },
        {
          username: "Ram",
          age: 60,
          gender: "male",
          status: false,
          email:'dhrakar@outlook.com',
          phone: "077 XXX XXXX",
          url:
            "http://viliclaw.com.au/wp-content/uploads/2017/09/testimonial-1.jpg"
        },
        {
          username: "Bawani",
          age: 25,
          gender: "female",
          status: false,
          email:'british@verizon.net',
          phone: "077 XXX XXXX",
          url: "https://www.cl.cam.ac.uk/women/profile/mateja.JPG"
        },
        {
          username: "Ranjana",
          age: 30,
          gender: "female",
          status: false,
          email:'british@verizon.net',
          url:
            "https://i.pinimg.com/originals/5d/21/3b/5d213b08ca32ac21694236cb4143bd30.jpg"
        }
      ],
      fields: [
        { key: "image" },
        { key: "username", sortable: true },
        { key: "age", sortable: true },
        { key: "gender"},
        { key: "email", sortable: true },
        { key: "phone"},
        { key: "status", sortable: true },
        { key: "view" },
        { key: "delete" }
      ],
      info : null
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => (this.info = response))
  },
  watch: {
    Dpassword: function(val) {
      if (!val) {
        this.Ddisable = true;
      } else if (val === this.password) {
        this.Ddisable = false;
      } else {
        this.Ddisable = true;
      }
    }
  },
  computed: {
    SearchFilter: function() {
      return this.items.filter(item => {
        //console.log(branch.company)
        return item.username
          .toLowerCase()
          .trim()
          .match(this.search);
      });
    }
  },
  components: { cTable },
  methods: {
    onSlideStart(slide) {
      console.log("onSlideStart", slide);
      this.sliding = true;
    },
    onSlideEnd(slide) {
      console.log("onSlideEnd", slide);
      this.sliding = false;
    },
    editClickHandler: function(record, index) {
      //console.log(record.item)
      if (record) {
        this.EModal = true;
        (this.editSelected.username = record.item.username),
        (this.editSelected.age = record.item.age),
        (this.editSelected.gender = record.item.gender),
        (this.editSelected.email = record.item.email),
        (this.editSelected.phone = record.item.phone),
        (this.editSelected.status = record.item.status),
        (this.editSelected.url = record.item.url);
      }
    },
    deleteClickHandler: function(record, index) {
      //console.log(record);

      if (record) {
        this.DModal = true;
        //this.DModal = record.item.username
        this.DeleteSelected.username = record.item.username;
      }
    },
    DModalHandler: function(Sdelete) {
      console.log(Sdelete);
    }
  }
};
</script>
<style scoped>
/* .container {
  position: relative;
  width: 50%;
} */

/* .container img {
  width: 100%;
  height: auto;
} */
.btnG{
  position:absolute;
  background-color: #ff0000;
  z-index: 2;
}
/* .container .btnG {
  position: absolute;
  top: 42%;
  left: 56%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #ff0000;
  color: white;
  font-size: 10;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.container .btnG:hover {
  background-color: black;
} */
</style>

