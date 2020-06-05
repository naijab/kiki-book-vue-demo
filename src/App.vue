<template>
  <div>
    <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
      <div class="flex items-center justify-between mb-4 md:mb-0">
        <h1 class="leading-none text-2xl text-grey-darkest">
          <router-link to="/" class="no-underline text-grey-darkest hover:text-black">Kiki Book</router-link>
        </h1>

        <a class="text-black hover:text-orange md:hidden" href="#">
          <i class="fa fa-2x fa-bars"></i>
        </a>
      </div>

      <nav>
        <ul class="list-reset md:flex md:items-center">
          <li class="md:ml-4">
            <router-link
              to="/"
              class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
              href="#"
            >Home</router-link>
          </li>
          <li class="md:ml-4">
            <router-link
              to="/checkout"
              class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
              href="#"
            >Checkout</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <router-view />
  </div>
</template>
