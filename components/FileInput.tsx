import Image from "next/image";
import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";

interface FormCTX {
  register: any;
  unregister: any;
  setValue: any;
  watch: any;
}

function FileInput(props: any) {
  const { name, label = name } = props;

  const { register, unregister, setValue, watch }: FormCTX = useFormContext();

  const files = watch(name);

  const onDrop = useCallback(
    (droppedFiles) => {
      setValue(name, droppedFiles, { shouldValidate: true });
    },
    [setValue, name]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    onDrop,
    accept: props.accept,
  });

  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  return (
    <>
      <div {...getRootProps()} className="mb-8">
        <input
          {...props}
          id={name}
          {...getInputProps()}
          className="focus:shadow-outline w-full  appearance-none rounded border py-2 px-3 leading-tight text-hr shadow focus:outline-none"
          type="text"
        />
        <div
          className={`bg-hr cursor-pointer w-44 overflow-hidden text-orange border-4 border-orange h-44 rounded-full mb-5 justify-center items-center flex`}
        >
          {/* {isDragActive ? (
            <p>Drop the file here ...</p>
          ) : (
            <p>Drag and drop image here or click to select image</p>
          )} */}
          {!!files?.length ? (
            <div>
              {files.map((file: any) => {
                return (
                  <div key={file.name}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-52 h-auto"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <Image
              src={"https://i.ibb.co/qWvBRhc/001-photo.png"}
              height={50}
              width={50}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default FileInput;
