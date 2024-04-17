import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
    Select,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

export type FormValues = z.infer<typeof formSchema>;

interface Props {
    onDialog: (value: { showDialog: boolean; formData: FormValues }) => void;
}


const formSchema = z
    .object({
        name: z.string().min(2, {message:"Must be at least 2 characters"}),
        lastName: z.string().min(2),
        emailAddress: z.string().email(),
        emailConfirm: z.string().email(),
        guests: z.string().transform(val => Number(val)).refine(val => val >= 1, { message: "Must be at least 1 guest" }),
        reservationType: z.enum(["personal", "company"]),
        companyName: z.string().optional(),
        date: z.date(),
        time: z.string()
    })
    .refine(
        (data) => {
            return data.emailAddress === data.emailConfirm;
        },
        {
            message: "Email does not match",
            path: ["emailConfirm"],
        }
    )
    .refine(
        (data) => {
            if (data.reservationType === "company") {
                return !!data.companyName;
            }
            return true;
        },
        {
            message: "Company name is required",
            path: ["companyName"],
        }
    );

const ReservationForm:React.FC<Props> = ({onDialog}) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            lastName: "",
            emailAddress: "",
            emailConfirm: "",
            guests: "0",
            reservationType: "personal",
            companyName: "",
            date: new Date(),
            time: ""
        },
    });

    const reservationType = form.watch("reservationType");

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log({ values });
        onDialog({showDialog: true, formData: values})
    };

    return (
        <main className="flex flex-col items-center justify-between min-w-64 md:py-4 md:4">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="max-w-md w-full flex flex-col gap-4 bg-[#a0b6ae] dark:bg-[#495E57] rounded-lg py-4 px-4 text-text dark:text-darktext placeholder:font-bold"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="First Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Last Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="emailAddress"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Email address</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Email address"
                                            type="email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="emailConfirm"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Confirm email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Confirm email"
                                            type="email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                                        <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Number of Guests</FormLabel>
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an account type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="1">1</SelectItem>
                                            <SelectItem value="2">2</SelectItem>
                                            <SelectItem value="3">3</SelectItem>
                                            <SelectItem value="4">4</SelectItem>
                                            <SelectItem value="5">5</SelectItem>
                                            <SelectItem value="6">6</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    <FormField
                        control={form.control}
                        name="reservationType"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Reservation type</FormLabel>
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an account type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="personal">Personal</SelectItem>
                                            <SelectItem value="company">Company</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                    {reservationType === "company" && (
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Company name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Company name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                    )}

<FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of reservation</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date()
                    }
                    initialFocus
                    className=" bg-white dark:bg-white border-gray-500 border-2 rounded-md"
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Please select a date for your reservation
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
                    <Button type="submit" className="w-full bg-white text-text dark:text-darktext dark:bg-darkbackground">
                        Submit
                    </Button>
                </form>
            </Form>
        </main>
    );
}

export default ReservationForm