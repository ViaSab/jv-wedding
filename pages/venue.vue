<template>
  <ElRow justify="center" align="middle" :gutter="30">
    <ElCol :xs="24">
      <h1 class="center">Venue</h1>
      <hr />
    </ElCol>
    <ElCol :xs="24" :md="12" :xl="12">
      <AppPicture path="venue/ferme-marie-helene" alt="Ferme Marie-Hélène" />
    </ElCol>
    <ElCol :xs="24" :md="12" :xl="12">
      <div>
        <ContentDoc />
      </div>
    </ElCol>
  </ElRow>
</template>
