
<template>
  <div>

  <header>
    <div>
      <nav>
        <RouterLink to="/auth/login">Login</RouterLink>
        <RouterLink to="/auth/resendPassword">Resend Password</RouterLink>
        <RouterLink to="/auth/forgot">Forgot Password</RouterLink>
      </nav>
    </div>
  </header>

    <RouterView />
  </div>
</template>

<style>

</style>
