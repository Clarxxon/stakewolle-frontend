<template>
  <div id="header" class="header">
    <Navigation></Navigation>
    <TargetBlock></TargetBlock>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import TargetBlock from "@/components/TargetBlock";
export default {
  name: "StartBlock",
  components: {Navigation, TargetBlock},
  data(){
    return{

    }
  }
}
</script>

