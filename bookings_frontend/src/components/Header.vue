<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand :to="{
                            name: 'StudentSignup'
                        }">Training Booking System</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <b-nav-item href="#">My Bookings</b-nav-item>
                        <b-nav-item :to="{
                            name: 'AddBooking'
                        }">Create Booking</b-nav-item>
                        
                        <!-- <router-link to="AddBooking">Add Booking</router-link> -->
                    </b-navbar-nav>

                    <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>My Account</em>
                    </template>
                    <!-- <b-dropdown-item href="#">Profile</b-dropdown-item> -->
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>