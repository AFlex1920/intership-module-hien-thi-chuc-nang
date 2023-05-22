import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { Box, TextInput, Grid, MultiSelect } from "@mantine/core";

const schema = z.object({
  tenKhaoSat: z.string().min(1, { message: "Tên khảo sát không được trống" }),
});

const KhaoSatNPS = () => {
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      tenKhaoSat: "",
      loaiKhaoSat: "",
    },
  });

  const data = [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
    { value: "riot", label: "Riot" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
  ];

  return (
    <>
      <div>
        <Box maw={600} mx="auto">
          <p>Thêm mới</p>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Grid>
              <Grid.Col span={8}>
                <TextInput
                  withAsterisk
                  label="Tên khảo sát"
                  {...form.getInputProps("tenKhaoSat")}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <MultiSelect
                  data={data}
                  label="Loại khảo sát"
                  {...form.getInputProps("loaiKhaoSat")}
                />
              </Grid.Col>
            </Grid>
          </form>
        </Box>
      </div>
    </>
  );
};

export default KhaoSatNPS;
